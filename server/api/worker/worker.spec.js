'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/worker', function() {

  it('should respond with JSON array of workers, populated', function(done) {
    request(app)
      .get('/api/worker')
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

describe('GET /api/worker/:id', function() {
  var worker;
  request(app).get('/api/worker').end(function (err, res) {
    worker = res.body[0];
  });

  it('should respond with JSON array of a Worker populated', function(done) {
    request(app)
      .get('/api/worker/' + worker._id)
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
