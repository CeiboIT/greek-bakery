'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/GDA', function() {

  it('should respond with JSON array of GDAes, populated', function(done) {
    request(app)
      .get('/api/GDA')
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

describe('GET /api/GDA/:id', function() {
  var GDA;
  request(app).get('/api/GDA').end(function (err, res) {
    GDA = res.body[0];
  });

  it('should respond with JSON array of a GDA populated', function(done) {
    request(app)
      .get('/api/GDA/' + GDA._id)
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
