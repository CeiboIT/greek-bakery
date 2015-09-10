'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/prodProcudeurs', function() {

  it('should respond with JSON array of prodProcudeursAs, populated', function(done) {
    request(app)
      .get('/api/prodProcudeurs')
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

describe('GET /api/prodProcudeurs/:id', function() {
  var prodProcudeurs;
  request(app).get('/api/prodProcudeurs').end(function (err, res) {
    prodProcudeurs = res.body[0];
  });

  it('should respond with JSON array of a ProdProcudeurs populated', function(done) {
    request(app)
      .get('/api/prodProcudeurs/' + prodProcudeurs._id)
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
