const jwt = require('jsonwebtoken'); 

const checkRootLogin = async (req, res, next) => {
    try {
        const token = req.header('accesstoken');
        console.log(`token : ${token}`);
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.SECRET);
        next()
    } catch (e) {
        console.log(e)
        res.status(401).send({error: 'No autenticado como usuario'})
    }
};

module.exports = {checkRootLogin};