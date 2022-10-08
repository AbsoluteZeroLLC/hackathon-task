const functions = require('firebase-functions');
const { env } = require('./env');
exports.func = functions.region(env.region);