// index.js

// Function to handle scuberGreetingForFeet
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
      return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
      return 'No can do.';
  }
}

// Function to handle ternaryCheckCity
function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

// Function to handle switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case 'generous':
          return 'Thank you so much.';
      case 'not as generous':
          return 'Thank you.';
      default:
          return 'Bye.';
  }
}

// Exporting functions for testing
module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};
