// =============================================
// 3. LOOPS — Even numbers
// =============================================
// Using a for loop from 1 to 20, print only the even numbers.
// Hint: use % and an if inside the loop.
//
// Expected output:
//   2
//   4
//   6
//   8
//   10
//   12
//   14
//   16
//   18
//   20

// your code here
for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
