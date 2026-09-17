const entrada = require('readline-sync');

const pecasPorCiclo = entrada.questionInt("Informe quantas pecas sao produzidas por ciclo: ");

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    console.log(`ciclo ${ciclo}: ${ciclo * pecasPorCiclo} pecas acumuladas`);
};