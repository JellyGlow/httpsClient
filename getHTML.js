const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
  // callbackkkk.call(this, 'asdf');

  https.get(requestOptions, (response) => {

    var rawData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      rawData += data;
      console.log("data : " + data.length);

    });

    response.on('end', () => {
     callback(rawData);
     // console.log(typeof(callback));
   });
  });
}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);

// getHTML(requestOptions, function(html) {
//   console.log(html);
// });
// function getHTML (options, callback) {
//   /* Add your code here */
// }

// function printHTML (html) {
//   console.log(html);
// }

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };