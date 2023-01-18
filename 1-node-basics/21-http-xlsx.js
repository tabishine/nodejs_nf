const xlsx = require("xlsx");
const http = require("http");

http
  .createServer((request, res) => {
    if (request.method !== "GET") return res.end("");
    // const wb = xlsx.read("S,h,e,e,t,J,S\n5,4,3,3,7,9,5", { type: "binary" });
    const wb = xlsx.readFile("./content/ovoshi.xlsx", { type: "binary" });
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="SheetJS2.xlsx"'
    );

    res.end(xlsx.write(wb, { type: "buffer", bookType: "xlsx" }));
  })
  .listen(5000);
