var Cylon = require('cylon');

Cylon.robot({
  name: 'jerky',
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-RGY-RN-SPP' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function() {
    every((30).second(), function() { console.log("I'm not dead"); });
  }
});

Cylon.start();
