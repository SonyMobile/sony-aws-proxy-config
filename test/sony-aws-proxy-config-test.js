'use strict';

var sinon = require('sinon');
var expect = require('chai').expect;
var sonyAwsProxyConfig = require('../lib/sony-aws-proxy-config');

describe('#sonyAwsProxyConfig', function() {
    it('responds with hello', function() {
        expect(sonyAwsProxyConfig()).to.equal('hello');
    });
});
