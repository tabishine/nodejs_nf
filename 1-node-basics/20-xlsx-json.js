const xlsx = require("xlsx");

const myFile = xlsx.readFile("./content/ovoshi.xlsx");

const data = [
  {
    name: "Dalida",
    product: "vegetables",
    amount: 5000,
  },
  {
    name: "Yeskhat",
    product: "fruits",
    amount: 3000,
  },
];

const ws = xlsx.utils.json_to_sheet(data);

xlsx.utils.book_append_sheet(myFile, ws, "Abort Controller");

xlsx.writeFile(myFile, "./content/sheet2.xlsx", { flag: "a" });
