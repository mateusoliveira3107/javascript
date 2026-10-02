const fs = require('fs');

function verificarArquivoJson(json) {
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
};

if (fs.existsSync('equipamentos.json')){
    const json = fs.readFileSync('equipamentos.json');
    const objetoJson = JSON.parse(json);
    
    verificarArquivoJson(objetoJson);
} else {
    console.log("Arquivo nao encontrado.");
}