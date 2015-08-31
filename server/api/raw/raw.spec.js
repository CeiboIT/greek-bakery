'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/raw', function() {

  it('should respond with JSON array of Raw, populated', function(done) {
    request(app)
      .get('/api/raw')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Array);
        // console.log(res.body[0]);
        done();
      });
  });

});