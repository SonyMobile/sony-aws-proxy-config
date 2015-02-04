'use-strict';
var debug = require('debug')('sony-aws-proxy-config');

function sonyAwsProxyConfig() {
    debug('process.env.http_proxy', process.env.http_proxy);
    if (!process.env.http_proxy)
        return {};

    var regex = new RegExp('.*//(.*):([0-9]+)/');
    var md = process.env.http_proxy.match(regex);
    var proxyConfig;
    if (md)
        return proxyWithTunnel(md[1], parseInt(md[2], 10));
    else
        return proxyDirect();
}

function proxyWithTunnel(host, port) {
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
    return { httpOptions: {
        proxy: process.env.http_proxy }
    };
}

module.exports = sonyAwsProxyConfig;
