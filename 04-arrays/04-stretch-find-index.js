// =============================================
// 4. ARRAYS — STRETCH: Find the index
// =============================================
// Find the index of target in the array WITHOUT .indexOf().
// Print "Nizwa is at index 3", or "Ibri not found" if it is not in the array.
// Test with target = "Ibri" too.
//
// Expected output:
//   Nizwa is at index 3

const cities = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];
const target = "Nizwa";

// your code here
let foundIndex = -1;

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === target) {
    foundIndex = index;
  }
}

if (foundIndex === -1) {
  console.log(`${target} not found`);
} else {
  console.log(`${target} is at index ${foundIndex}`);
}
