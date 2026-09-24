const entrada = require('readline-sync');

const pecasPorCiclo = entrada.questionInt("Informe quantas pecas sao produzidas por ciclo: ");
let pecasAcumuladas = 0;

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    pecasAcumuladas += pecasPorCiclo
    console.log(`ciclo ${ciclo}: ${pecasAcumuladas} pecas acumuladas`);
};