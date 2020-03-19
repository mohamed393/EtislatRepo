const ApiError = require('./ApiError');
const {validationResult } = require('express-validator');
const {matchedData} = require('express-validator');


const isNumeric = value => Number.isInteger(parseInt(value));
const validId = id => isNumeric(id);

module.exports = {

    async checkExistThenGet  (id, Model, findQuery = { populate: '', select: '' }, errorMessage = '')  {
        let populateQuery = findQuery.populate || '', selectQuery = findQuery.select || '';
    
        if (typeof findQuery != 'object') {
            errorMessage = findQuery;
            findQuery = {};
        } else {    
            delete findQuery.populate;
            delete findQuery.select;
        }
        if (validId(id)) {
            let model = await Model.findOne({ _id: id, ...findQuery }) 
                .populate(populateQuery).select(selectQuery);
            if (model)
                return model;
        }
        throw new ApiError(404, errorMessage || `${Model.modelName} Not Found`);
    },

    checkValidations(req) {
        const validationErrors = validationResult(req).array({ onlyFirstError: true });
        if (validationErrors.length > 0) {
          throw new ApiError(422, validationErrors);
        }
        return matchedData(req);
    }
};

