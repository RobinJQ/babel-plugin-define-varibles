"use strict";

if (false) {
  console.log("prod");
}

console.log(`production: ${false}`);
let a = false || "abc";

function b(c = false) {
  return c;
}
