var rocket;
var baseLine;

function setup() {
	createCanvas(800, 600);

	baseLine = height - 100

	rocket =
	{
		x: width / 2,
		y: baseLine,
		thrust: false,
		moveLeft: false,
		moveRight: false,
		/// Make a method here
		drawRocket: function () {
			fill(180)
			beginShape();
			vertex(this.x + 10, this.y + 60);
			vertex(this.x + 10, this.y + 20);
			vertex(this.x + 15, this.y);
			vertex(this.x + 20, this.y + 20);
			vertex(this.x + 20, this.y + 60);
			endShape(CLOSE);

			fill(255, 0, 0);
			beginShape();
			vertex(this.x, this.y + 60);
			vertex(this.x + 10, this.y + 40);
			vertex(this.x + 10, this.y + 60);
			endShape(CLOSE);

			beginShape();
			vertex(this.x + 30, this.y + 60);
			vertex(this.x + 20, this.y + 40);
			vertex(this.x + 20, this.y + 60);
			endShape(CLOSE);

			if (this.thrust) {
				fill(255, 150, 0);
				beginShape();
				vertex(this.x + 10, this.y + 60);
				vertex(this.x + 13, this.y + 80);
				vertex(this.x + 15, this.y + 70);
				vertex(this.x + 18, this.y + 80);
				vertex(this.x + 20, this.y + 60);
				endShape(CLOSE);
			}
		},
		moveRocket: function () {
			if (this.thrust && this.y > 0) {
				this.y -= 2;
			}
			else if (this.y < baseLine) {
				this.y += 3;
			}
		
			if (this.moveLeft && this.x > 0 && this.y != baseLine) {
				this.x -= 2;
			}
		
			if (this.moveRight && this.x < width && this.y != baseLine) {
				this.x += 2;
			}
		
			
		}
	};

}
function draw() {
	background(10);
	//draw the rocket
	rocket.drawRocket();
	//move the rocket
	rocket.moveRocket();

}

function keyPressed() {
	if (key == "W") {
		rocket.thrust = true;
	}

	if (key == "A") {
		rocket.moveLeft = true;
	}

	if (key == "D") {
		rocket.moveRight = true;
	}
}

function keyReleased() {
	if (key == "W") {
		rocket.thrust = false;
	}

	if (key == "A") {
		rocket.moveLeft = false;
	}

	if (key == "D") {
		rocket.moveRight = false;
	}

}