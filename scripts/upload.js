const fs = require('fs');
const path = require('path');
const net = require('net');

const FTP_HOST = '82.180.143.14';
const FTP_PORT = 21;
const FTP_USER = 'u696371114.Vikasdhara';
const FTP_PASS = 'Vortex@121';
const REMOTE_DIR = '/home/u696371114/domains/vikasdharafoundation.org/public_html';
const LOCAL_DIR = path.resolve(__dirname, 'dist');

console.log('Deploying dist folder to FTP:', FTP_HOST);
console.log('Local folder:', LOCAL_DIR);
console.log('Remote folder:', REMOTE_DIR);
