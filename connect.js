var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'looped', adaptor: 'loopback'},

  work: function() {
    every((1).second(), function() { console.log("Hello, human!"); });
  }
});

Cylon.start();
