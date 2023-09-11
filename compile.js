const fs = require('fs');
const os = require('os')
const methods = fs.readdirSync('./methods');

const bytesToGB = (bytes) => {
  return `${(bytes / 1e9).toFixed(2)} GB`
}

console.log('```');
console.log('NodeJS:', process.version)
console.log('Processor: ', os.cpus()[0].model)
console.log('Memory: ', bytesToGB(os.totalmem()))

console.table(methods.map(method => require(`./methods/${method}/dist/result.json`)).sort((a,b) => a.average - b.average));
console.log('```');
