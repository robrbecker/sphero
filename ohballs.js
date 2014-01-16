var Cylon = require('cylon');

Cylon.robot({
  name: 'curveball',
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-BPR-AMP-SPP' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function(me) {
  	var umadbro = 0xFF0000;
  	var chillax = 0x0000DD;
  	var going = true;
  	var speed = 50;
  	var wait = 0;
  	var direction = 0;
  	var beginSpeed = 30;

  	function pickNewDirection() {
  		direction = Math.floor(Math.random() * 360) + (direction < 180 ? 180 : 0);
  	}

	function goApe() {
		var to = after((1).second(), function() {
			speed += 20;
			Logger.info("Watch my speed "+speed);
		    if (going) me.sphero.roll(Math.min(speed,255), direction);
    	});
    	after((6).second(), pickNewDirection);
    	//to.cancel();
    	after((1).second(), goApe);
	}

	me.sphero.on('collision', function(data) {
      Logger.info("Collision:");
      Logger.info(data);
      //color = color ^ bitFilter;
      me.sphero.setRGB(umadbro);
	pickNewDirection();
      me.sphero.stop();
      speed = beginSpeed;
      going = false;
      after((2).second(), function() {
      	speed = beginSpeed;
      	
      	me.sphero.setRGB(chillax);
      	going = true;
      	goApe();
      });
    });

  	Logger.info("I am starting up");
    me.sphero.setRGB(chillax);
	Logger.info("Setting up Collision Detection...");
	me.sphero.detectCollisions();
	goApe();
  }
}).start();
//Cylon.start();