'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/cFash', function() {

  it('should respond with JSON array of cFashes, populated', function(done) {
    request(app)
      .get('/api/cFash')
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

describe('GET /api/cFash/:id', function() {
  var cFash;
  request(app).get('/api/cFash').end(function (err, res) {
    cFash = res.body[0];
  });

  it('should respond with JSON array of a Fash populated', function(done) {
    request(app)
      .get('/api/cFash/' + cFash._id)
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
