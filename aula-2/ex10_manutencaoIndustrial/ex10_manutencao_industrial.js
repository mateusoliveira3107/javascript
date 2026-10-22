const fs = require('fs');
const entrada = require('readline-sync');

try {
    if (fs.existsSync('manutencoes.json')) {
        const textoManutencao = fs.readFileSync('manutencoes.json');

        const maquinas = JSON.parse(textoManutencao);
        let totalMaquinas = 0;
        let maquinasManutencao = 0;

        for (let m of maquinas) {
            let horasRestantes = m.limiteManutencao - m.horasUso;

            if (horasRestantes <= 0) {
                maquinasManutencao ++;
                totalMaquinas ++;
                
                horasRestantes = 0;

                const classificacaoMaquina = "MANUTENCAO NECESSARIA";

                console.log(`ID: ${m.id}`);
                console.log(`Maquina: ${m.maquina}`);
                console.log(`Setor: ${m.setor}`);
                console.log(`Horas Uso: ${m.horasUso}`);
                console.log(`Horas Restantes: ${horasRestantes}`);
                console.log(`Classificacao: ${classificacaoMaquina}`);
                console.log("---".repeat(10));
            } else {
                const classificacaoMaquina = "NORMAL";
                totalMaquinas ++;

                console.log(`ID: ${m.id}`);
                console.log(`Maquina: ${m.maquina}`);
                console.log(`Setor: ${m.setor}`);
                console.log(`Horas Uso: ${m.horasUso}`);
                console.log(`Horas Restantes: ${horasRestantes}`);
                console.log(`Classificacao: ${classificacaoMaquina}`);
                console.log("---".repeat(10));
            };
        };

        console.log(`\nMaquinas cadastradas: ${totalMaquinas}`);
        console.log(`Maquinas que precisam de manutencao: ${maquinasManutencao}\n`);

        while (true) {
            const idSolitado = entrada.questionInt("Insira o ID da maquina para manutencao: ");

            const maquinaEscolhida = maquinas.find(function(maquina) {
                return maquina.id === idSolitado;
            });

            if (!maquinaEscolhida) {
                console.log("Maquina nao encontrada. Tente Novamente\n");
            } else {
                console.log("\nMaquina Encontrada!");

                fs.writeFileSync('manutencoes_backup.json', textoManutencao);
            
                console.log(`ID: ${maquinaEscolhida.id}\nMaquina: ${maquinaEscolhida.maquina}`);

                maquinaEscolhida.manutencaoRealizada = true;

                const manutencaoAtualizado = JSON.stringify(maquinas, null, 2);

                entrada.question(`[ENTER] para registrar manutencao da maquina '${maquinaEscolhida.maquina}'`);

                fs.writeFileSync('manutencoes.json', manutencaoAtualizado);
                console.log("\nManutencao Registrada Com Sucesso!");
                break;
            };
        };
    } else {
        console.log("Arquivo nao encontrado");
    };
} catch (erro) {
    console.error(`Erro encontrado: ${erro.message}`);
};