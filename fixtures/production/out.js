"use strict";

if (true) {
  console.log("prod");
}

console.log(`production: ${true}`);
let a = true || "abc";

function b(c = true) {
  return c;
}
