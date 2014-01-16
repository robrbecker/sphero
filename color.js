var Cylon = require('cylon');

Cylon.robot({
  name: 'curveball',
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-RGY-RN-SPP' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function(me) {
  	
  	// me.sphero.on('connect', function() {
      Logger.info("Setting up Collision Detection...");
      me.sphero.detectCollisions();
      me.sphero.stop();
    // });

	me.sphero.on('collision', function(data) {
      Logger.info("Collision:");
      //color = color ^ bitFilter;
      //me.sphero.setRGB(Math.floor(Math.random() * 100000));
      //Logger.info("Color: " + (color.toString(16)) + " ");
      //me.sphero.setRGB(color);
      //me.sphero.roll(90, Math.floor(Math.random() * 360));
    });

  	Logger.info("I am starting up");
    //every((1).second(), function() {
      me.sphero.setRGB(0x0000DD);
      me.sphero.roll(40,0);
    //});
	
  }
})//.start();
Cylon.start();