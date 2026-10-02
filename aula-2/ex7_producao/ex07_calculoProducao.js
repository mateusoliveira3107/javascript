const fs = require('fs');

if (fs.existsSync('producao.json')) {
    const textoProducao = fs.readFileSync('producao.json');

    const maquinas = JSON.parse(textoProducao);
    
    for (let m of maquinas) {
    const percentual = (m.produzido/m.meta) * 100;

    let situacao;

    if (percentual >= 100) {
        situacao = "META ATINGIDA";
    } else if (percentual >= 80 && percentual) {
        situacao = "ATENCAO";
    } else {
        situacao = "ABAIXO DA META";
    }
    console.log("====".repeat(6))
        console.log(`Maquina: ${m.maquina}`);
        console.log(`Meta: ${m.meta}`);
        console.log(`Produzido: ${m.produzido}`);
        console.log(`Desempenho: ${percentual.toFixed(2)}%`);
        console.log(`Situacao: ${situacao}`);
    };
} else {
    console.log("Arquivo nao encontrado.")
};


