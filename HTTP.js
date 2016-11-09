const https = require('https');

function getAndPrintHTMLChunks (requestOptions) {

// httpResponse.on('data', function(chunk) {
//  rawData += chunk;
// });
//
// httpResponse.on('end', () => {
//  console.log(rawData);
// });

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data.length);
    });

    response.on('end', (contentBody) => {
     console.log(contentBody.length);
   });

  });
};

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

console.log(getAndPrintHTMLChunks(requestOptions));
//-------------

// const http = require('http');

// http.get('http://www.espn.com/', (httpResponse) => {

//   httpResponse.setEncoding('utf8');

//   var contentBody = '';

//   httpResponse.on('data', function (chunk) {
//     contentBody += chunk;
//   });

//   httpResponse.on('end', () => {
//     console.log(contentBody.length);
//   });

// });

//-----------
// Your first function getAndPrintHTMLChunks will utilize
// the https library to GET a given URL.
// You can use the example above as a reference or template.

// This function should console.log each chunk of data as it
// is received, concatenated with a newline character ('\n')
// so you can visualize each chunk.

// Remember in this and each subsequent Step - you will always
// need to invoke (call) the function you wrote.


//EXAMPLE THAT WAS GIVEN PREVIOUSLY:

// var https = require('https');

// var requestOptions = {
//   host: 'example.com',
//   path: '/'
// };

// https.get(requestOptions, function (response) {
//   response.setEncoding('utf8');
//   response.on('data', function (data) {
//     console.log('Chunk Received. Length:', data.length);
//   });
//   response.on('end', function() {
//     console.log('Response stream complete.');
//   });
// });
