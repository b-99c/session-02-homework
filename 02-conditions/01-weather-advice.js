// =============================================
// 2. CONDITIONS — Weather advice
// =============================================
// Create a variable temperature = 43.
// Print advice:
//   40 or more -> "Stay inside, it's very hot!"
//   30 or more -> "Hot, drink lots of water."
//   20 or more -> "Nice weather, go outside."
//   otherwise  -> "Cool, take a jacket."
// After it works, change temperature to 35, 25 and 15 and check every branch.
//
// Expected output:
//   43°C: Stay inside, it's very hot!

// your code here
const temperature = 43;
let advice;

if (temperature >= 40) {
  advice = "Stay inside, it's very hot!";
} else if (temperature >= 30) {
  advice = "Hot, drink lots of water.";
} else if (temperature >= 20) {
  advice = "Nice weather, go outside.";
} else {
  advice = "Cool, take a jacket.";
}

console.log(`${temperature}°C: ${advice}`);
