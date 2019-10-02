var fs = require('fs');

var jsonString = { name: 'Joe'};

fs.writeFile('data2.json', jsonString, function(err) {
    if (err) {
        console.log(err);
    }
});