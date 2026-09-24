// Uma linha de produção registrou a quantidade de peças com defeito em 6 inspeções. O programa deve ler
// os valores e calcular o total e a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço for para solicitar exatamente 6 valores.
// ☐ Somar cada valor ao acumulador.
// ☐ Ao final, calcular a média.
// ☐ Exibir total e média.
// ☐ Não repetir manualmente seis comandos de entrada.

const entrada = require('readline-sync');
let acumuladora = 0;
let i = 1
for(i; i <= 6; i++) {
    const valor = entrada.questionFloat(`Digite o valor da ${i} peca: `);
    acumuladora += valor;
};

const media = acumuladora/6;
console.log(`Total de defeitos: ${acumuladora.toFixed(2)}`);
console.log(`Media de defeitos: ${media.toFixed(2)}`);