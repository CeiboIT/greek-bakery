'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/parapono', function() {

  it('should respond with JSON array of paraponos, populated', function(done) {
    request(app)
      .get('/api/parapono')
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

describe('GET /api/parapono/:id', function() {
  var parapono;
  request(app).get('/api/parapono').end(function (err, res) {
    parapono = res.body[0];
  });

  it('should respond with JSON array of a Parapono populated', function(done) {
    request(app)
      .get('/api/parapono/' + parapono._id)
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
