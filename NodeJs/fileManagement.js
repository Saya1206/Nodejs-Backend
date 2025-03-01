const fs = require("fs");

// 1. Check if file exists
// syntax : fs.access(path, module, callback)
fs.access("example2.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File does not exist");
  } else {
    console.log("File exists");
  }
});

// 2. Rename file
// syntax : fs.rename('oldfilename.txt', 'newfilename.txt', callback)
fs.rename("oldfile.txt", "newone.txt", (err) => {
  if (err) {
    console.err("Error renaming file: ", err);
  }
  console.log("File renamed successfully");
});

// 3. Delete file
// syntax : fs.unlink(path, callback)
fs.unlink("info.txt", (err) => {
  if (err) {
    console.error("Error deleting file");
  }
  console.log("File deleted successfully");
});
