(function(window) {

function Ball() {

  this.initialize();

}
//p est un raccourci
var p = Ball.prototype = new createjs.Container();

// public properties:

	p.BallBody;
	

	p.bounds;

	p.hit;
	

// constructor:

	p.Container_initialize = p.initialize;	//unique to avoid overiding base class

	

	p.initialize = function() {

		this.Container_initialize();

		this.BallBody = new createjs.Shape();

		this.addChild(this.BallBody);

		this.makeShape();

	}

	

// public methods:

	p.makeShape = function() {

		//Cercle

		var g = this.BallBody.graphics;

		g.clear();

		g.setStrokeStyle(1);
		g.beginStroke(createjs.Graphics.getRGB(0,255,0));
		g.beginFill(createjs.Graphics.getRGB(255,0,0));
		g.drawCircle(0,0,10);

		//radius pour savoir si on touche ou pas

		this.bounds = 10; 

		this.hit = this.bounds;

	}

    p.hitRadius = function(tX, tY, tHit) {

		// savoir si il est en dehors de la zone hauteur largeur

		if(tX - tHit > this.x + this.hit) { return  'not'; }

		if(tX + tHit < this.x - this.hit) { return  'not'; }

	

	},
	p.tick = function() {
		
	}
	p.play=function(){
		var g = this.BallBody.graphics;

		g.clear();

		g.setStrokeStyle(1);
		g.beginStroke(createjs.Graphics.getRGB(255,255,0));
		g.beginFill(createjs.Graphics.getRGB(255,255,0));
		g.drawCircle(0,0,10);
	}

	

	



window.Ball = Ball;

}(window));