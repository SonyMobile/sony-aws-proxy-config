'use strict';
// jshint camelcase: false

var debug = require('debug')('sony-aws-proxy-config');

function sonyAwsProxyConfig() {
  debug('process.env.http_proxy', process.env.http_proxy);
  if (!process.env.http_proxy)
    return {};
  var url = require('url');
  var HttpsProxyAgent = require('https-proxy-agent');

  var proxy = url.parse(process.env.http_proxy);
  var agent = new HttpsProxyAgent(proxy);

  return {
    httpOptions: { agent: agent }
  };
}

module.exports = sonyAwsProxyConfig;
