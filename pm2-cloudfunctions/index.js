
process.env.DEBUG="api,network";

var Intercom = require('./cloudfunctions.js');

if (require.main === module) {
  new Intercom({
    peer_api_port : 10000
  });
}

module.exports = Intercom;