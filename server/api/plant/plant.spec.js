'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/plant', function() {

  it('should respond with JSON array of plants, populated', function(done) {
    request(app)
      .get('/api/plant')
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

describe('GET /api/plant/:id', function() {
  var plant;
  request(app).get('/api/plant').end(function (err, res) {
    plant = res.body[0];
  });

  it('should respond with JSON array of a Plant populated', function(done) {
    request(app)
      .get('/api/plant/' + plant._id)
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
