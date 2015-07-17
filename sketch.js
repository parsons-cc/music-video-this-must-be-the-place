// start volume of the song (value between 0 and 1)
var volume = 1.0;

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
  song = loadSound('https://dl.dropboxusercontent.com/u/2100102/parsons-cc/seu-mane-luiz.mp3');
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

  if(song.isPlaying()) {
    // things to do when the song is playing
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
