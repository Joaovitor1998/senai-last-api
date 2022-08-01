export function verifyUserByGivenType(username, dao) {
    const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmail = username.match(EMAIL_PATTERN);

    if( isEmail ) { 
        return dao.findByEmail(username);
    }

    return dao.findByUsername(username);
}

export function generateToken(user, secret, jwt) {
    const { id, username, email, tb_roles } = user.dataValues;
    const roles = extractUserRoles(tb_roles);

    const jwtSignature = { id, username, email, roles };
    const expiration = { expiresIn: 86400 };

    return jwt.sign(jwtSignature, secret, expiration);

}

function extractUserRoles(roles) {
    const userRoles = [];

    roles.forEach( role => userRoles.push(role.roleName) );

    return userRoles;
}