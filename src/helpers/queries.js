const testFolder = __dirname + '/../queries/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach((file) => {
    module.exports[file.replace('.sql', '').toUpperCase()] = fs.readFileSync(__dirname + '/../queries/' + file).toString()
})
