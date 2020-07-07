if (ENV_PRODUCTION) {
  console.log("prod");
}

console.log(`production: ${ENV_PRODUCTION}`);

let a = ENV_PRODUCTION || "abc";

function b(c = ENV_PRODUCTION) {
  return c;
}
