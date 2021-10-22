const jwt = require('jsonwebtoken');
const { Base64 } = require('js-base64');


module.exports = (req, res, next) => {
    try {


        const token = req.headers.authorization.split(' ')[1];
        let decryptToken = (Base64.decode(token)).split(':')
        console.log("decryptToken", decryptToken);
        if (token) {
            next();
        } else {
            throw 'Invalid user ID';
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};