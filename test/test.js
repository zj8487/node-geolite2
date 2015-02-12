/*global describe, it */
'use strict';

var should = require('should');
var assert = require('assert');
var nodeGeolite2 = require('../');

describe('node-geolite2 node module', function () {
  it('must have at least one test', function () {
    nodeGeolite2.init();
    var location = nodeGeolite2.getGeoDataSync("118.112.56.251");
    location.cityNames.zh.should.equal("~H~P~C�");
    location.countryNames.zh.should.equal("中~[�");
  });
});
