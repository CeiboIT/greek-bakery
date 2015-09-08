'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/prodDate', function() {

  it('should respond with JSON array of prodDateAs, populated', function(done) {
    request(app)
      .get('/api/prodDate')
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

describe('GET /api/prodDate/:id', function() {
  var prodDate;
  request(app).get('/api/prodDate').end(function (err, res) {
    prodDate = res.body[0];
  });

  it('should respond with JSON array of a ProdDate populated', function(done) {
    request(app)
      .get('/api/prodDate/' + prodDate._id)
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
