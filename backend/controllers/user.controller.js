const User = require('../models/user.model')
const config = require('../config')

const {checkExistThenGet,checkValidations} = require('../helpers/checkMethods')
const {body} = require('express-validator');

const utils  = require('../helpers/utils')
const bcrypt = require('bcryptjs')
const ApiError = require('../helpers/ApiError')


let createPromise = (query)=>{
    let newPromise = new Promise(async (resolve,reject)=>{
        try {
            const result = await query;
            resolve(result);
        } catch (error) {
            reject(error);
        }
    }) 
    return newPromise ;
}

module.exports = {

    async findAll(req,res,next){
        try {
            let limit = (+req.query.limit <=  config.limit)? +req.query.limit : config.limit 
            let page = +req.query.page || config.page ;
            let skip = (page-1)*limit;
            let {name,email  , deleted , canDelete , active } = req.query ;
            let query = {deleted:false};
            let sortQuery = {_id:-1};
            if (name) {
                query.name = { '$regex': name, '$options': 'i' }
            }
            if (email) {
                query.email = { '$regex': email, '$options': 'i' }
            }
            if (deleted) {
                query.deleted = deleted ;
            }
            if (canDelete) {
                query.canDelete = canDelete ;
            }
            if (active) {
                query.active = active ;
            }
            let findQuery = createPromise(User.find(query).limit(limit).skip(skip).sort(sortQuery)) 
            let countQuery = createPromise(User.count(query)) ;
            let result = await Promise.all([findQuery,countQuery]);
            res.status(200).send({users:result[0],count:result[1]})
        } catch (error) {
            next(error);
        }
    },

    async findById(req,res,next){
        try {
            let {id} = req.params ;
            let user = await checkExistThenGet(id,User , {deleted:false});
            res.status(200).send({user:user});
        } catch (error) {
            next(error);
        }
    },

    validateUser(){
        let validations = [
            body('name').trim().not().isEmpty().withMessage('nameRequired'),
            body('password').trim().not().isEmpty().withMessage('passwordRequired'),
            body('email').trim().not().isEmpty().withMessage('emailRequired').isEmail().withMessage('invalidEmail')
                .custom(async(value)=>{
                    let exist = await User.findOne({deleted:false , email:value})  ;
                    if (exist) {
                        throw new ApiError(400,'emailDuplicated');
                    }
                })
        ];
        return validations ;
    },

    async create(req,res,next){
        try {
            let body = checkValidations(req);
            
            body.password = bcrypt.hashSync(body.password,10);
            let user = new User(body);
            await user.save();
            res.status(200).send({user:user , token:utils.generateToken(user._id)});
        } catch (error) {
            next(error);
        }
    },

    async delete(req,res,next){
        try {
            let {id} = req.params ;
            let user = await checkExistThenGet(id,User , {deleted:false});
            user.deleted = true ; 
            await user.save();

            res.status(200).send('Deleted');
        } catch (error) {
            next(error);
        }
    },
}