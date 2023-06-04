// Event listener for keypress event
document.addEventListener("keypress", function(event) {
  // Call the makeSound function with the pressed key
  makeSound(event.key);
  
  // Call the buttonAnimation function with the pressed key
  buttonAnimation(event.key);
});

// Function to play the corresponding sound based on the key
function makeSound(key) {
  // Create the path to the sound file
  var pathToSound = "sounds/" + key + ".mp3";
  
  // Create a new Audio object with the sound file
  var song = new Audio(pathToSound);
  
  // Play the sound
  song.play();
}

// Function to animate the button associated with the pressed key
function buttonAnimation(currentKey) {
  // Find the button element with the class equal to the pressed key
  var activeButton = document.querySelector("." + currentKey);
  
  // Add the "pressed" class to the button for animation
  activeButton.classList.add("pressed");
  
  // Remove the "pressed" class after 100 milliseconds to revert the animation
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
