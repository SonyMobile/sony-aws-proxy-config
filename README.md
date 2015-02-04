# Sony-aws-proxy-config

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

