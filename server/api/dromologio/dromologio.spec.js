'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/dromologio', function() {

  it('should respond with JSON array of dromologios, populated', function(done) {
    request(app)
      .get('/api/dromologio')
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

describe('GET /api/dromologio/:id', function() {
  var dromologio;
  request(app).get('/api/dromologio').end(function (err, res) {
    dromologio = res.body[0];
  });

  it('should respond with JSON array of a Dromologio populated', function(done) {
    request(app)
      .get('/api/dromologio/' + dromologio._id)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Object);
        console.log('Getted dromologio: ', res.body);
        done();
      });
  });

});
