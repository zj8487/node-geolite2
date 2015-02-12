'use strict';

var path = require("path");
var mmdbreader = require('maxmind-db-reader');
var geoDataFile = path.join(__dirname, '/data/GeoLite2-City.mmdb');


function MaxmindDBReader (){
  this.reader = null;
};

MaxmindDBReader.prototype.initSync = 
MaxmindDBReader.prototype.init = function(cb){
  this.reader = mmdbreader.openSync(geoDataFile);
  if (!!cb && typeof cb === 'function') cb(null, null);
}


MaxmindDBReader.prototype.getGeoData = function getGeoData(ipAddress,callback) {
  if (!this.reader) throw Error("must init the mudule first");
  this.reader.getGeoData(ipAddress,callback);
};

MaxmindDBReader.prototype.getGeoDataSync = function getGeoDataSync(ipAddress) {
  if (!this.reader) throw Error("must init the mudule first");
  return this.reader.getGeoDataSync(ipAddress);
};

MaxmindDBReader.prototype.getDatabaseMetadata = function getDatabaseMetadata() {
  if (!this.reader) throw Error("must init the mudule first");
  return this.reader.getDatabaseMetadata();
};

exports = module.exports = new MaxmindDBReader();
