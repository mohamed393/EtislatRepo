const config = require('../config') ;

const jwt = require('jsonwebtoken')

const { jwtSecret } = config;

module.exports = {

    generateToken (id) {
        return jwt.sign({
            id: id,
            iss: 'App',
            iat: new Date().getTime()
        }, jwtSecret, { expiresIn: '30d' });
    }
    
} ;