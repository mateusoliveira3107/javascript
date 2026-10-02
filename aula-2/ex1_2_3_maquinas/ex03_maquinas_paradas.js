const fs = require('fs');

const json = fs.readFileSync('equipamentos.json');
const objetoJson = JSON.parse(json);

let totalMaquinasParadas = 0

console.log("=== EQUIPAMENTOS PARADOS ===")
for (let o of objetoJson) {
    if (o.operacional === false) {
        console.log(`${o.nome} - ${o.setor}`);

        totalMaquinasParadas ++
    };
};

console.log(`\nTotal de equipamentos paradas: ${totalMaquinasParadas}`);