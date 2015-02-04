'use strict';

var debug = require('debug')('sony-aws-proxy-config:middleware');

function middleware(req, resp, next) {
    debug(req.method, req.path);
    if (req.method === 'GET' && req.path === '/change_me') {
        return resp.status(200).send('Change the body text');
    }
    next();
}

module.exports = middleware;
