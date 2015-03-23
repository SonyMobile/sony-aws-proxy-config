'use strict';
// jshint camelcase: false
var expect = require('chai').expect;
var sonyAwsProxyConfig = require('../lib/sony-aws-proxy-config');

describe('#sonyAwsProxyConfig', function() {

    describe('with no http_proxy', function() {
        it('responds with {}', function() {
            delete process.env.http_proxy;
            expect(sonyAwsProxyConfig()).to.deep.equal({});
        });
    });

    describe('with sony global proxy', function() {
        it('responds with direct proxy', function() {
            process.env.http_proxy =
                'http://proxy.global.sonyericsson.net:8080';
            var config = sonyAwsProxyConfig();
            expect(config.httpOptions.agent).to.be.defined;
            expect(config.httpOptions.agent.proxyOptions).to.deep.equal({
                host: 'proxy.global.sonyericsson.net',
                port: 8080
            });
        });
    });
    describe('with cntlm proxy', function() {
        it('responds with agent proxy', function() {
            process.env.http_proxy = 'http://localhost:3128/';
            var config = sonyAwsProxyConfig();
            expect(config.httpOptions.agent).to.be.defined;
            expect(config.httpOptions.agent.proxyOptions).to.deep.equal({
                host: 'localhost',
                port: 3128
            });
        });
    });
});
