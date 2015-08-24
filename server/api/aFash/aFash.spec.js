'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/aFash', function() {

  it('should respond with JSON array of aFashes, populated', function(done) {
    request(app)
      .get('/api/aFash')
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

describe('POST /api/aFash/detail', function() {
  var aFash; 
  request(app).get('/api/aFash').end(function (err, res) {
    aFash = res.body[0];
    console.log(aFash);
  });

  it('should respond with JSON of aFash completed (joined)', function(done) {
    request(app)
      .post('/api/aFash/detail').send(aFash)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
            return done(err);
        }
        res.body.should.be.instanceof(Object);
        console.log('Response populatd');
        console.log(res.body);
        done();
      });
  });
  
});
