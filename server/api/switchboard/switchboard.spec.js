'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/switchboard', function() {

  it('should respond with JSON array of switchboardes, populated', function(done) {
    request(app)
      .get('/api/switchboard')
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

describe('GET /api/switchboard/:id', function() {
  var switchboard;
  request(app).get('/api/switchboard').end(function (err, res) {
    switchboard = res.body[0];
  });

  it('should respond with JSON array of a Switchboard populated', function(done) {
    request(app)
      .get('/api/switchboard/' + switchboard._id)
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
