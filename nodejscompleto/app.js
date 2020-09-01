const fs = require("fs"),
  Promise = require("promise");
/*console.time("Assincrono");
let counter = 0;
for (let i = 0; i < 1000; i++) {
  fs.readFile("myFile.txt", (err, data) => {
    if (err) console.log(err);
    counter++;
    console.log(`Assincrono: ${data.toString()}`);
    if (counter === 1000) {
      console.timeEnd("Assincrono");
    }
  });
}
console.time("Sincrono");
for (let i = 0; i < 1000; i++) {
  var data = fs.readFileSync("myFile.txt");
  console.log(`Sincrono: ${data.toString()}`);
}
console.timeEnd("Sincrono");
*/

const read = (file) => {
  return new Promise((fullFill, reject) => {
    fs.readFile("myFile.txt", (err, data) => {
      if (err) reject(err);
      else fullFill(data.toString());
    });
  });
};
for (let i = 0; i < 1000; i++) {
  read("myFile.txt")
    .then((data) => {
      console.log(data);
      return i + 1;
    })
    .catch((error) => {
      console.log(error);
    })
    .done((data) => {
      console.log(data);
    });
}
