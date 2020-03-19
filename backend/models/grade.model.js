const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const gradeSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name:{
        type:{en:{type:String , required:true},ar:{type:String , required:true}}
    },
    deleted: {
        type: Boolean,
        default: false
    },
    canDelete: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

autoIncrement.initialize(mongoose.connection);
gradeSchema.plugin(autoIncrement.plugin, { model: 'grade', startAt: 1 });

module.exports =  mongoose.model('grade', gradeSchema);