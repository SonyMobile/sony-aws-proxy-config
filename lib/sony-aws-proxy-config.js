'use strict';
// jshint camelcase: false

var debug = require('debug')('sony-aws-proxy-config');

function sonyAwsProxyConfig() {
    debug('process.env.http_proxy', process.env.http_proxy);
    if (!process.env.http_proxy)
        return {};

    var regex = new RegExp('.*//(.*):([0-9]+)/');
    var md = process.env.http_proxy.match(regex);
    if (md)
        return proxyWithTunnel(md[1], parseInt(md[2], 10));
    else
        return proxyDirect();
}

function proxyWithTunnel(host, port) {
    debug('Using proxy with tunnel, should by used with CNTLM');
    return {
        httpOptions: {
            agent: require('tunnel').httpsOverHttp({
                proxy: {
                    host: host,
                    port: port
                }
            })
        }
    };
}

function proxyDirect() {
    debug('Using proxy direct, should by used with proxy.global.sonyericsson.net:8080');
    debug('If you are here even if you are using CNTLM');
    debug('Make sure you have a trailing slash in proxy path: http://localhost:3128/');
    return { httpOptions: {
        proxy: process.env.http_proxy }
    };
}

module.exports = sonyAwsProxyConfig;
