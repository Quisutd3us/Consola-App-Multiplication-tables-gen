const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors')

const createTable = (base = 5, show = true, limit = 10) => {
    return new Promise((resolve, rejects) => {
       let content,printConsole =`
--------------------------
    TABLE OF ${base}    
--------------------------
`
        for (let i = 1; i <= limit; i++) {
            content += `${base} x ${i} = ${base * i} \n`;
            printConsole += `${base} ${'x'.red} ${i} ${'='.red} ${base * i} \n`;
        }
        if (show) {
            console.log(printConsole)
        }
        fs.writeFileSync(`./tables/table${base}.txt `, content);
        resolve(`tabla ${base}.txt`)
        rejects(err)
    })
}

module.exports = {
    createTable
}
