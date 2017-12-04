var fs = require('fs');

var test = String(fs.readFileSync('./test.txt'));

var rows = test.split("\n");

var checksum = 0;

for (var i = 0; i < rows.length; i++) {
    var columns = rows[i].split("\t");

    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;
    
    for (var j = 0; j < columns.length; j++) {
        var num = Number.parseInt(columns[j]);
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    checksum += (max - min);
}

console.log("Answer: ", checksum);