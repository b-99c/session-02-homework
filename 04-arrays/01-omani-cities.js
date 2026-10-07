// =============================================
// 4. ARRAYS — Omani cities
// =============================================
// 1. Print how many cities are in the array.
// 2. Print the first city and the last city.
//    The last one must work even if we add more cities (use length!).
// 3. Print every city with its number.
//
// Expected output:
//   Number of cities: 5
//   First: Muscat
//   Last: Sur
//   1. Muscat
//   2. Salalah
//   3. Sohar
//   4. Nizwa
//   5. Sur

const cities = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];

// your code here
console.log(`Number of cities: ${cities.length}`);
console.log(`First: ${cities[0]}`);
console.log(`Last: ${cities[cities.length - 1]}`);

for (let index = 0; index < cities.length; index++) {
  console.log(`${index + 1}. ${cities[index]}`);
}
