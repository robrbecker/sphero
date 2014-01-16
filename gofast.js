var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-RGY-RN-SPP' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function(me) {
    //every((1).second(), function() {
      me.sphero.roll(90, 320);
    //});
  }
}).start();