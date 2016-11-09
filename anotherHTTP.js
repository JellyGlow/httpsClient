//you got data, people want INFO!!

const https = require('https');
// REQUIRE DEPENDENCIES
//here some sort of HTTP module

// GET THE INPUT FOR THE PROGRAM

function getAndPrintHTML (requestOptions) {
// USE THE INPUT TO COMPUTE THE OUTPUT
//this is the hard one... yup. OKAY.

// SO. any of these things can be wrapped in a function
// httpResponse.on('data', function(chunk) {
//  rawData += chunk;
// });

// httpResponse.on('end', () => {
//  console.log(rawData);
// });

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
// PUT THE OUTPUT SOMEWHERE
// what do you want to do with this program?
};

// Don't forget to commit your work from Step 1 if you haven't already!
// In another file, create a second function, getAndPrintHTML, which will
// look very similar to your first function.

// This function should use a
// buffering technique to append each chunk of data to a variable as it
// is received, and then console.log the data once all of the data has been
// received. Buffering in this context means the technique you've used
// before (usually in loops or conditionals) of creating an empty variable
// and adding data to it.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
