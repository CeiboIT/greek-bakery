'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/marketer', function() {

  it('should respond with JSON array of marketers, populated', function(done) {
    request(app)
      .get('/api/marketer')
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

describe('GET /api/marketer/:id', function() {
  var marketer;
  request(app).get('/api/marketer').end(function (err, res) {
    marketer = res.body[0];
  });

  it('should respond with JSON array of a Marketer populated', function(done) {
    request(app)
      .get('/api/marketer/' + marketer._id)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Object);
        console.log('Getted marketer: ', res.body);
        done();
      });
  });

});
