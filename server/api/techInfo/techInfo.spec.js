'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/techInfo', function() {

  it('should respond with JSON array of techInfos, populated', function(done) {
    request(app)
      .get('/api/techInfo')
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

describe('GET /api/techInfo/:id', function() {
  var techInfo;
  request(app).get('/api/techInfo').end(function (err, res) {
    techInfo = res.body[0];
  });

  it('should respond with JSON array of a TechInfo populated', function(done) {
    request(app)
      .get('/api/techInfo/' + techInfo._id)
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
