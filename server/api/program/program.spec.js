'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/program', function() {

  it('should respond with JSON array of programAs, populated', function(done) {
    request(app)
      .get('/api/program')
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

describe('GET /api/program/:id', function() {
  var program;
  request(app).get('/api/program').end(function (err, res) {
    program = res.body[0];
  });

  it('should respond with JSON array of a Program populated', function(done) {
    request(app)
      .get('/api/program/' + program._id)
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
