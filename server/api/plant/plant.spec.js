'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/plant', function() {

  it('should respond with an Plant object, fully populated ', function(done) {
    request(app)
      .get('/api/plant')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Object);
        done();
      });
  });

});