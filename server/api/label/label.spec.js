'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/label', function() {

  it('should respond with JSON array of labelAs, populated', function(done) {
    request(app)
      .get('/api/label')
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

describe('GET /api/label/:id', function() {
  var label;
  request(app).get('/api/label').end(function (err, res) {
    label = res.body[0];
  });

  it('should respond with JSON array of a Label populated', function(done) {
    request(app)
      .get('/api/label/' + label._id)
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
