const { readFile, writeFile } = require("fs");

readFile("./content/test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  readFile("./content/test-to-write.txt", "utf-8", (err, data2) => {
    if (err) {
      console.log("error2", err);
      return;
    }

    writeFile(
      "./content/result-async.txt",
      `Async result 2: ${data + " " + data2} \n`,
      { flag: "a" },
      (err) => {
        if (err) {
          console.log("err write: ", err);
          return;
        }
      }
    );
  });
});
