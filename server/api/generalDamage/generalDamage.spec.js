'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/generalDamage', function() {

  it('should respond with JSON array of generalDamageAs, populated', function(done) {
    request(app)
      .get('/api/generalDamage')
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

describe('GET /api/generalDamage/:id', function() {
  var generalDamage;
  request(app).get('/api/generalDamage').end(function (err, res) {
    generalDamage = res.body[0];
  });

  it('should respond with JSON array of a GeneralDamage populated', function(done) {
    request(app)
      .get('/api/generalDamage/' + generalDamage._id)
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
