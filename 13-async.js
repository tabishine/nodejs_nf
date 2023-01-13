const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const result = await readFile("./content/first.txt", "utf-8");
    const result2 = await readFile("./content/second.txt", "utf-8");

    await writeFile(
      "./content/result-async2.txt",
      `Async result 102: ${result + " " + result2} \n`,
      { flag: "a" },
      (err) => {
        if (err) {
          console.log("err write: ", err);
          return;
        }
      }
    );
  } catch {
    console.error("error");
  }
};

start();

// const { promisify } = require("util");

// const promisifiedReader = promisify(readFile);
// const promisifiedWriter = promisify(writeFile);

// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// getFile("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
