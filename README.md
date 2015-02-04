# sony-aws-proxy-config

Helper function to configure AWS for Node.js with the Sony proxy server.

# Installation

```
$ npm install --save sony-aws-proxy-config
```

# Usage

```
var AWS = require('aws-sdk');
var sonyAwsProxyConfig = require('sony-aws-proxy-config');
AWS.config.update(sonyAwsProxyConfig());
```

