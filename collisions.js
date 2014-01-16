var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-RGY-RN-SPP' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function(me) {
    
    var color = 0x00FF00;
    var bitFilter = 0xFFFF00;

    me.sphero.on('connect', function() {
      Logger.info("Setting up Collision Detection...");
      me.sphero.detectCollisions();
      me.sphero.setRGB(color);
      me.sphero.stop();
    });

    me.sphero.on('collision', function(data) {
      Logger.info("Collision:");
      //color = color ^ bitFilter;
      me.sphero.setRGB(Math.floor(Math.random() * 100000));
      Logger.info("Color: " + (color.toString(16)) + " ");
      //me.sphero.setRGB(color);
      me.sphero.roll(90, Math.floor(Math.random() * 360));
    });

    every((1).second(), function() {
      me.sphero.roll(60, Math.floor(Math.random() * 360));
    });
  }
}).start();