const fs = require('fs');

const textoMedicoes = fs.readFileSync('temperaturas.json');
const medicoes = JSON.parse(textoMedicoes);

function verificarMedicoes(medicao) {
    try {
        for (let m of medicao) {
            if (m.temperatura <= 350) {
                console.log(`Leitura: ${m.temperatura}°C - NORMAL`)
            } else {
                console.log(`ALARME: Temperatura de ${m.temperatura}°C exedeu o limite`)
            }
        }
    } catch (erro) {
        console.log("Valor Invalido");
    }
};
verificarMedicoes(medicoes);