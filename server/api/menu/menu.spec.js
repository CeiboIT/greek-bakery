'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/menu', function() {

  it('should respond with JSON array of menus, populated', function(done) {
    request(app)
      .get('/api/menu')
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

describe('GET /api/menu/:id', function() {
  var menu;
  request(app).get('/api/menu').end(function (err, res) {
    menu = res.body[0];
  });

  it('should respond with JSON array of a Menu populated', function(done) {
    request(app)
      .get('/api/menu/' + menu._id)
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
