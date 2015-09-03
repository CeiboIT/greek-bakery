'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/calories', function() {

  it('should respond with JSON array of calorieses, populated', function(done) {
    request(app)
      .get('/api/calories')
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

describe('GET /api/calories/:id', function() {
  var calories;
  request(app).get('/api/calories').end(function (err, res) {
    calories = res.body[0];
  });

  it('should respond with JSON array of a Calories populated', function(done) {
    request(app)
      .get('/api/calories/' + calories._id)
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
