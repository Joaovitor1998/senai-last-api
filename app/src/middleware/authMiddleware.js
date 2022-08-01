const jwt = require('jsonwebtoken');

function isLoggedIn(req, res, next) {

    // GET TOKEN FROM HEADER
    const bearerToken = req.headers['authorization'] ?? null;

    if (bearerToken !== null) {

        const secret = req.app.get('secret');
        // GET ONLY THE TOKEN, REMOVING THE WORD 'BEARER' IN FRONT OF IT.
        const userToken = token.split(" ")[1];

        jwt.verify(userToken, secret, (err, result) => {

            if (err) {
                return res.status(403).json({
                        message: "Given token is not valid!"
                    });
            }

            next();
        });

    } else {
        res.status(400).json({
            message: 'A token was not given.'
        });
    }

}


module.exports = isLoggedIn;