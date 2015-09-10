'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/WP', function() {

  it('should respond with JSON array of WPAs, populated', function(done) {
    request(app)
      .get('/api/WP')
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

describe('GET /api/WP/:id', function() {
  var WP;
  request(app).get('/api/WP').end(function (err, res) {
    WP = res.body[0];
  });

  it('should respond with JSON array of a WP populated', function(done) {
    request(app)
      .get('/api/WP/' + WP._id)
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
