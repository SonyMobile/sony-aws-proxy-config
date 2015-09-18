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
            var proxy = config.httpOptions.agent.proxy;
            expect(proxy.host).to.equal('proxy.global.sonyericsson.net');
            expect(proxy.port).to.equal(8080);
        });
    });
    describe('with cntlm proxy', function() {
        it('responds with agent proxy', function() {
            process.env.http_proxy = 'http://localhost:3128/';
            var config = sonyAwsProxyConfig();
            expect(config.httpOptions.agent).to.be.defined;
            var proxy = config.httpOptions.agent.proxy;
            expect(proxy.host).to.equal('localhost');
            expect(proxy.port).to.equal(3128);
        });
    });
});
