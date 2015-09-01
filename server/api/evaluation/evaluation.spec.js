'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/evaluation', function() {

  it('should respond with JSON array of evaluationes, populated', function(done) {
    request(app)
      .get('/api/evaluation')
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

describe('GET /api/evaluation/:id', function() {
  var evaluation;
  request(app).get('/api/evaluation').end(function (err, res) {
    evaluation = res.body[0];
  });

  it('should respond with JSON array of a Evaluation populated', function(done) {
    request(app)
      .get('/api/evaluation/' + evaluation._id)
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
