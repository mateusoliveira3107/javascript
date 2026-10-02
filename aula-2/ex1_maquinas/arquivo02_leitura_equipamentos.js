const fs = require('fs');

const json = fs.readFileSync('equipamentos.json');
const objetoJson = JSON.parse(json);

function verificarArquivoJson(json) {
    if (json) {
        for (let o of json) {
            console.log(`Codigo: ${o.codigo}`);
            console.log(`Nome: ${o.nome}`);
            console.log(`Setor: ${o.setor}`);
            if (o.operacional === true) {
                o.operacional = "OPERACIONAL"
            } else {
                o.operacional = "PARADA"
            }
            console.log(`Status: ${o.operacional}`);
            console.log("---".repeat(8))
        }
    } else {
        console.log("Arquivo nao encontrado.");
    };
};

verificarArquivoJson(objetoJson);