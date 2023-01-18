const { readFileSync, writeFileSync } = require("fs");

const text = readFileSync("./content/test.txt", "utf-8");
const textToWrite = readFileSync("./content/test-to-write.txt", "utf-8");

console.log("1");

writeFileSync(
  "./content/result-sync.txt",
  ` | ${text}, ${textToWrite}, additional info2`,
  { flag: "" }
);

console.log(text, textToWrite);
