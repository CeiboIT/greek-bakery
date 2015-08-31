'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/machine', function() {

  it('should respond with JSON array of machines, populated', function(done) {
    request(app)
      .get('/api/machine')
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

describe('GET /api/machine/:id', function() {
  var machine;
  request(app).get('/api/machine').end(function (err, res) {
    machine = res.body[0];
  });

  it('should respond with JSON array of a Machine populated', function(done) {
    request(app)
      .get('/api/machine/' + machine._id)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Object);
        console.log('Getted machine: ', res.body);
        done();
      });
  });

});
