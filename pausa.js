p5.disableFriendlyErrors = true;

let playing = true;

var segs =[];

var t1;

var tentacles = [];

function setup()
	{
		createCanvas(window.innerWidth, window.innerHeight);
		//createCanvas(512,512);
		background(0);

		segRoot = new
		Segment(width/2,height/2 + 100, 10, radians(-90), 0, null);
	
		var len=20;



		for (j = 0; j < 77; j++)
			{
				tentacles.push(new 
				Tentaccle(width/2,
				height/2.20,
				random(-360,0),42));
			}	

	}


function draw(){
	background(255,101,170);
	
	for(var j= 0; j < tentacles.length; j++){
		
		tentacles[j].render(true, true);
	}

}