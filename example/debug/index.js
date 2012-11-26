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

  var button = document.getElementById('go');

  button.onclick = function(){
    var events = require('events');
    var path = require('path');
    // var vm = require('vm');
    var http = require('http');
    var crypto = require('crypto');
    var assert = require('assert');
    var url = require('url');
    var buffer = require('buffer');
    var util = require('util');
    var querystring = require('querystring');
    var stream = require('stream');
    var os = require('os');
    // Chrome API is async
    setTimeout(function(){
	console.dir( os.networkInterfaces() );
    },25);
    console.log(process);
  };


};
