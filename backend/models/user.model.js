var mongoose = require('mongoose');
var Schema = mongoose.Schema ;
var autoIncrement = require('mongoose-auto-increment')
const userSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name:{
        type:String ,
        required:true
    },
    email:{
        type:String ,
        required:true
    },
    password:{
        type:String ,
        required:true
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
    },
    rest_token:{
        type:String 
    },
    expire_at:{
        type:Date
    }
}, { timestamps: true });

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, { model: 'user', startAt: 1 });

module.exports =  mongoose.model('user', userSchema);