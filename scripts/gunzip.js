var fs = require('fs'); 
var path = require('path'); 
var zlib = require('zlib'); 
var gunzip = zlib.createGunzip(); 

var zipedDataFile = path.join(__dirname, '/../data/GeoLite2-City.mmdb.gz');
var unzipedDataFile = path.join(__dirname, '/../data/GeoLite2-City.mmdb');

if (!fs.existsSync(zipedDataFile)) {
  throw Error("./data/GeoLite2-City.mmdb.gz not exist");
}

var inp = fs.createReadStream(zipedDataFile); 
var out = fs.createWriteStream(unzipedDataFile); 
inp.pipe(gunzip).pipe(out); 
