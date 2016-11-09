const https = require('https');

function getAndPrintHTML (options) {

  https.get(requestOptions, (response) => {
    var rawData = "";
    response.setEncoding('utf8');
    response.on('data', function (data) {
      rawData += data;
      console.log("data : " + data.length);
    });
    response.on('end', () => {
     console.log("end: " + rawData);
   });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);