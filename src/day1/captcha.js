var fs = require('fs');

var test = String(fs.readFileSync('./testcase.txt'));

var sum = 0;

for (var i = 0; i < test.length; i++) {
    if (test.charAt(i) === test.charAt((i + 1) % test.length)) {
        sum += Number.parseInt(test.charAt(i));
    }
}

console.log("Answer: ", sum);