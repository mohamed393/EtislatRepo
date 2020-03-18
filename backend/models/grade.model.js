var mongoose = require('mongoose');
var Schema = mongoose.Schema ;
var autoIncrement = require('mongoose-auto-increment')
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

gradeSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
autoIncrement.initialize(mongoose.connection);
gradeSchema.plugin(autoIncrement.plugin, { model: 'grade', startAt: 1 });

module.exports =  mongoose.model('grade', gradeSchema);