const http = require('http');

// Whenever we send an HTTP request, we need to specify
// - choose method/verb
// - choose the path
// - choose the host and port
// - specify any headers that we need to send
// - specify the content body

http.get('example.com/' , (httpResponse) => {
  console.log(httpResponse)
});
// () is a function, => is that it run it when...
//httpResponse only comes back after the request has gone and come back
// it will only get called when we get a response from the server
// so it only gets run sometimes

//use curl to see the URL