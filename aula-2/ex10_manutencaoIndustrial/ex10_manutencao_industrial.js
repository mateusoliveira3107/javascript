const fs = require('fs');

if (!fs.existsSync('ex10_manutencao_industrial.js')){
    console.log("Arquivo nao encontrado")
} else {
    const textoManutencao = fs.readFileSync('ex10_manutencao_industrial.js');

    const maquinas = JSON.parse(textoManutencao);

    for (let m of maquinas) {
        console.log("===".repeat(10));
        console.log(`${m.id}\nMaquina: ${maquina}\nSetor: ${setor}\nHoras Uso: ${horasUso}`)
    };
}