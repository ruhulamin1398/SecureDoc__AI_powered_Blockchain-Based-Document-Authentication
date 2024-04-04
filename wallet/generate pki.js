const forge = require('node-forge');
const fs = require('fs');

// Generate a RSA key pair
const keys = forge.pki.rsa.generateKeyPair({ bits: 2048 });
const privateKeyPem = forge.pki.privateKeyToPem(keys.privateKey);
const publicKeyPem = forge.pki.publicKeyToPem(keys.publicKey);

// Save the keys to files
fs.writeFileSync('private_key.pem', privateKeyPem);
fs.writeFileSync('public_key.pem', publicKeyPem);

console.log('Keys generated successfully.');