// =============================================
// 4. ARRAYS — Exam results
// =============================================
// 1. Count how many students passed (score 60 or more).
// 2. Find the lowest score WITHOUT Math.min.
//
// Expected output:
//   Passed: 4 of 7
//   Lowest score: 39

const scores = [78, 45, 92, 60, 55, 88, 39];

// your code here
let passed = 0;
let lowestScore = scores[0];

for (let index = 0; index < scores.length; index++) {
  if (scores[index] >= 60) {
    passed++;
  }

  if (scores[index] < lowestScore) {
    lowestScore = scores[index];
  }
}

console.log(`Passed: ${passed} of ${scores.length}`);
console.log(`Lowest score: ${lowestScore}`);
