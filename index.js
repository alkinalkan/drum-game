// Set up an event listener to detect key presses on the webpage.
document.addEventListener("keypress", function(event) {
  // Call the makeSound function with the pressed key to play a corresponding sound.
  makeSound(event.key);

  // Call the buttonAnimation function with the pressed key to animate the associated button.
  buttonAnimation(event.key);
});

// Play a sound based on the provided key.
function makeSound(key) {
  // Construct the path to the sound file using the key.
  var pathToSound = "sounds/" + key + ".mp3";

  // Create a new Audio object with the sound file path.
  var audioElement = new Audio(pathToSound);

  // Play the sound using the play() method of the Audio object.
  audioElement.play();
}

// Animate the button associated with the pressed key.
function buttonAnimation(currentKey) {
  // Find the button element that has a class matching the pressed key.
  var activeButton = document.querySelector("." + currentKey);

  // Add the "pressed" class to the button element to trigger the animation.
  activeButton.classList.add("pressed");

  // Remove the "pressed" class after a delay of 100 milliseconds
  // to revert the animation effect.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
