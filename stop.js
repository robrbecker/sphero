var Cylon = require('cylon');

Cylon.robot({
  name: 'curveball',
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-RGY-RN-SPP' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function(me) {
      me.sphero.stop();
  }
}).start();