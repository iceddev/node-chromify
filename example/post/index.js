/*
   Copyright 2012 Google Inc

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

onload = function() {

  var http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.method == 'POST') {
      req.setEncoding('ascii');
      var body = '';
      req.on('data', function (data) {
          body += data;
      });
      req.on('end', function () {
        res.end(body + '\n');
      });
    }else{
      res.end('Hello World\n');
    }

  }).listen(1338, '127.0.0.1');
  console.log('Server running at http://127.0.0.1:1338/');

};
