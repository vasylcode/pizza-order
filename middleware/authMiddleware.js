const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(400).json({message: 'User is not logged in'});

        }
        const decodedData = jwt.verify(token, config.get('secret'));
        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'User is not logged in'});
    }
}