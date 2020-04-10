var fetch = require('node-fetch');
var HTTPsAgent = require('socks5-https-client/lib/Agent')
var HTTPAgent = require('socks5-http-client/lib/Agent')
var caller = require('caller');
const path = require('path');

module.exports = function(url, options) {
  options = options || {};
  var c = caller();
  var engineName =path.basename(c, path.extname(c));
  var socksHost = (process.env.socks_host || process.env['socks_host_'+engineName]);
  var socksPort = (process.env.socks_port || process.env['socks_port_'+engineName]);
var httpsAgent = new HTTPsAgent({socksHost:socksHost,socksPort})
var httpAgent = new HTTPAgent({socksHost:socksHost,socksPort})
  if (socksHost) {options.agent=url.startsWith('https')?httpsAgent:httpAgent}
  return fetch(url, options);                                                                                                  }
