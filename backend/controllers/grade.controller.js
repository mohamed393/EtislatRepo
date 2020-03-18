const Grade = require('../models/grade.model')
const config = require('../config')

const checkMethods = require('../helpers/checkMethods')


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
            let page = +req.query.limit || config.page ;
            let skip = (page-1)*limit;
            let {name  , deleted , canDelete , active } = req.query ;
            let query = {deleted:false};
            let sortQuery = {_id:-1};
            if (name) {
                query.$or = [{'name.en':{ '$regex': name, '$options': 'i' }},
                        {'name.ar':{ '$regex': name, '$options': 'i' }}]
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
            let findQuery = createPromise(Grade.find(query).limit(limit).skip(skip).sort(sortQuery)) 
            let countQuery = createPromise(Grade.count(query)) ;
            let result = await Promise.all([findQuery,countQuery]);
            res.status(200).send({grades:result[0],count:result[1]})
        } catch (error) {
            next(error);
        }
    },

    async findById(req,res,next){
        try {
            let {id} = req.params ;
            console.log('mmmmmmmmmmmmmmmmmmmmmmmmm')
            let grade = await checkMethods.checkExistThenGet(id,Grade , {deleted:false});
            res.status(200).send({grade:grade});
        } catch (error) {
            next(error);
        }
    },

    async create(req,res,next){
        try {
            res.status(200).send('Done')
        } catch (error) {
            next(error);
        }
    },

    async update(req,res,next){
        try {
            res.status(200).send('Done');
        } catch (error) {
            next(error);
        }
    },
    
    async delete(req,res,next){
        try {
            let {id} = req.params ;
            let grade = await checkMethods.checkExistThenGet(id,Grade , {deleted:false});
            grade.deleted = true ;
            await grade.save();
            res.status(200).send('Deleted.');
        } catch (error) {
            next(error);
        }
    }
}