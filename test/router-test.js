'use strict';

var request = require('supertest');
var sinon = require('sinon');
var expect = require('chai').expect;

var express = require('express');
var router = require('../lib/router');

var app = express();

app.use('/', router);

describe('router', function() {
    describe('GET /', function(){
        it('responds with change_me text and 200', function(done){
            request(app)
                .get('/')
                .expect(200)
                .end(function(err, resp) {
                    expect(resp.text).to.equal('Change the body text');
                    done();
                });
        });
    });

    describe('/anything else', function() {
        it('calls next()', function(done){
            request(app)
                .get('/anything_else')
                .expect(404)
                .end(done);
        });
    });
});
