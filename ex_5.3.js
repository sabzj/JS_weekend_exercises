// Input string with spaces
let str = "the-stealth-warrior";
let str = "The_Stealth_Warrior";

// Function to convert into camel Case
function camelCase(str) {
  // Using replace method with regEx
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

console.log(camelCase(str));
