var getHTML = require('./http-functions');


module.exports = function getHTML (options, callback) {
    /* Your code here */
};

var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };
// module.exports = function getHTML (options, callback) {
//   https.get(requestOptions, (response) => {

//     var rawData = "";
//     response.setEncoding('utf8');
//     response.on('data', function (data) {
//       rawData += data;
//       console.log("data : " + data.length);

//     });
//     response.on('end', () => {
//      callback(rawData);

//    });
//   });
// };
// function printHTML (html) {
//   console.log(html);
// }
// getHTML(requestOptions);