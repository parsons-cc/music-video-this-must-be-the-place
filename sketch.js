// start volume of the song (value between 0 and 1)
var volume = 1.0;
var songUrl = 'https://dl.dropboxusercontent.com/u/2100102/parsons-cc/this-must-be-the%20place.mp3';
var trans = { x:0, y:0 };
var dots = [];
/**
 * @name preload
 * @description
 * this is called before the sketch starts to load media, data, etc.
 *
 * this is a p5.js function
 * http://p5js.org/reference/#/p5/setup
 */
function preload() {
  // load the sound file!
  song = loadSound(songUrl);
}


/**
 * @name setup
 * @description
 * this is called when the sketch first starts
 *
 * this is a p5.js function
 * http://p5js.org/reference/#/p5/setup
 */
function setup() {

  // create full-screen canvas
  createCanvas(windowWidth, windowHeight);

  // let's set the volume to the initial value of `volume` (0)
  song.setVolume(volume);

  // start the song in loop mode
  song.loop();

  // trans.x = width/2;
  // trans.y = height/2;

  translate(width/2, height/2);
  angleMode(DEGREES);
}


/**
 * @name draw
 * @description
 * called every frame
 *
 * this is a p5.js function
 * http://p5js.org/reference/#/p5/draw
 */
function draw() {
  var maxDotLength = 25;
  var smallDotRadius = 3;
  var bigDotRadius = 30;


  background(0);
  // showTime(song, 10, 50);

  push();
    trans.y += 1;

    if(frameCount % 20 == 0) {
      // console.log('save dot', trans.x, trans.y);
      dots.push({ x: trans.x, y: trans.y });
      trans.x += 5;
      dots.push({ x: trans.x, y: trans.y });

    }
    // translate(trans.x, trans.y);
    fill(255, 255, 255, 120);

    for(var i = 0; i < dots.length; i++) {
      // translate(dots[i].x, dots[i].y);
      rotate(frameCount);
      ellipse(dots[i].x, dots[i].y, smallDotRadius, smallDotRadius);
    }

    if(dots.length > maxDotLength) {
      dots.pop();
    }

    // console.log('dot length '+dots.length);

  pop();

  if(song.isPlaying()) {
    // things to do when the song is playing
    fill(255, 100, 100, 100);
    noStroke();
    ellipse(0, 0, bigDotRadius, bigDotRadius);
  }

  if(!song.isPlaying()) {
    // things to do when son is stopped/paused
  }

}

/**
 * @name windowResized
 * @description
 * called every time the window size is changed
 *
 * this is a p5.js function
 * http://p5js.org/reference/#/p5/windowResized
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function showTime(song, x, y) {
  var time = song.currentTime();
  var minutes = floor(time / 60) + '';
  var seconds = floor(time - (minutes * 60)) + '';

  if(minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if(seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var output = minutes + ':' + seconds + ' - ' +  floor(time);

  push();
    textFont('Helvetica');
    textSize(20);
    text(output, x, y);
  pop()
}

function keyPressed() {
  if(key === ' ') {
    if(song.isPaused()) {
      song.play();
    } else {
      song.pause();
    }
  }
}
