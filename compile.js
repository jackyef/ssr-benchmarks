const fs = require('fs');
const methods = fs.readdirSync('./methods');

console.log('```');
console.table(methods.map(method => require(`./methods/${method}/dist/result.json`)).sort((a,b) => a.average - b.average));
console.log('```');