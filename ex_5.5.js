//  Abbreviate two words

function abbreviateName(name) {
  return name
    .split(" ")

    .map((part) => part[0].toUpperCase())

    .join(".");
}
console.log(abbreviateName("zafer sabbah"));
