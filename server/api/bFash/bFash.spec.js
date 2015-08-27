'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/bFash', function() {

  it('should respond with JSON array of bFashes, populated', function(done) {
    request(app)
      .get('/api/bFash')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Array);
        done();
      });
  });

});

describe('GET /api/bFash/:id', function() {
  var bFash;
  request(app).get('/api/bFash').end(function (err, res) {
    bFash = res.body[0];
  });

  it('should respond with JSON array of a Fash populated', function(done) {
    request(app)
      .get('/api/bFash/' + bFash._id)
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
