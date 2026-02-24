const fs = require("fs");
fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.log("Error while writing file:", err);
    return;
  }
  console.log("File has been written s u c c e s s f u l l y");

  fs.readFile("info.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("error while reading file:", err);
      return;
    }
    console.log("File has been read s u c c e s s f u l l y ", data);
  });
});
