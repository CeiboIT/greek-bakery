'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/advice', function() {

  it('should respond with JSON array of advicees, populated', function(done) {
    request(app)
      .get('/api/advice')
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

describe('GET /api/advice/:id', function() {
  var advice;
  request(app).get('/api/advice').end(function (err, res) {
    advice = res.body[0];
  });

  it('should respond with JSON array of a Advice populated', function(done) {
    request(app)
      .get('/api/advice/' + advice._id)
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
