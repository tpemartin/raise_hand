import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

var client = jwksClient({
  jwksUri: 'https://www.googleapis.com/oauth2/v3/certs'
});

function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

jwt.verify(token, getKey, {
  audience: 'YOUR_GOOGLE_CLIENT_ID',
  issuer: "accounts.google.com",
  algorithms: ['RS256']
}, function(err, decoded) {
  console.log(decoded);
});
