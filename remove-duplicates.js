var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function removeDuplicates(str) {
  let result = str
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
  process.stdout.write(`result: ${result}`);
}

rl.on("line", function (line) {
  removeDuplicates(line);
});
