/**
 * Created by Bancho on 12-Apr-16.
 */

module.exports.jwtConfig = {
    secret: "ChangMeToARealSecretOurIWillBeHacked",
    tokenExpirationTime: 60 * 20, //seconds
    audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
};