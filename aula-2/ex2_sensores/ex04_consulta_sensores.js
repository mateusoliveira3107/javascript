const fs = require('fs');

const leituraJson = fs.readFileSync('monitoramento.json');
const sensores = JSON.parse(leituraJson);

console.log("============ SENSORES ============");
// Mostrar todos os sensores
for (let s of sensores) {
    console.log(`${s.codigo}  -  Tipo: ${s.tipo}  -  Valor: ${s.valor}  -  Unidade: ${s.unidade}  -  Status: ${s.status}`);
};

let sensoresAlerta = 0;

// Mostrar só os sensores com status alerta
console.log("\n======= SENSORES EM ALERTA =======")
for (let s of sensores) {
    if (s.status === "alerta") {
        console.log(`${s.codigo}  -  Tipo: ${s.tipo}  -  Valor: ${s.valor}  -  Unidade: ${s.unidade}  -  Status: ${s.status}`);
        sensoresAlerta ++
    };
}
console.log(`\nSensores em alerta: ${sensoresAlerta}`)