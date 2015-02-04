'use strict';

var debug = require('debug')('sony-aws-proxy-config:route');
var express = require('express');

var router = express.Router();

router.get('/', function (req, resp) {
    debug(req.path);
    return resp.status(200).send('Change the body text');
});

module.exports = router;
