const { pipeline } = require("node:stream/promises");
const fs = require("fs");
const zlib = require("zlib");

// - take data put in zip
// - take zip unwrap to whatever (json, buffer, file data,...)
// - Abort mechanism

async function run() {
  const ac = new AbortController();
  const signal = ac.signal;

  setImmediate(() => ac.abort());

  await pipeline(
    fs.createReadStream("./content/big.txt"),
    zlib.createGzip(),
    fs.createWriteStream("./content/archive2.zip.gz"),
    { signal: signal }
  );
  pipeline();
}

run().catch((err) => {
  console.log(err);
});
