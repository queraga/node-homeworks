const fs = require("fs");
fs.mkdir("myFolder", (err1) => {
  if (err1) {
    console.log("error while creating folder:", err1);
    return;
  }
  console.log("folder created");
  fs.rmdir("myFolder", (err2) => {
    if (err2) {
      console.log("error while folder deleting", err2);
      return;
    }
    console.log("Folder has been deleted");
  });
});
