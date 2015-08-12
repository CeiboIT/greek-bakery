'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var assert = require('chai').assert;
var Plant = require('./plant.model');
var plants = require('../../../extracted_base/json/tbPlant.json');

describe('Load plant records from json file and insert into db', function () {
    
    it('should create and insert a Plant', function (done) {
        console.log(typeof plants);
        plants.forEach(function (aPlant) {
            Plant.create(aPlant);
        });
        Plant.count({}, function (err, count) {
            assert.equal(count, 1);
            done();
        });
    });

});