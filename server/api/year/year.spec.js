'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/year', function() {

  it('should respond with JSON array of yearAs, populated', function(done) {
    request(app)
      .get('/api/year')
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

describe('GET /api/year/:id', function() {
  var year;
  request(app).get('/api/year').end(function (err, res) {
    year = res.body[0];
  });

  it('should respond with JSON array of a Year populated', function(done) {
    request(app)
      .get('/api/year/' + year._id)
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
