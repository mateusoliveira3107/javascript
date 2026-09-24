// Um almoxarifado precisa cadastrar 4 materiais. Cada material possui nome, quantidade atual e estoque
// mínimo. Ao final, o programa deve indicar quais precisam de reposição.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para cadastrar 4 materiais.
// ☐ Criar um objeto em cada repetição com nome, quantidade e estoqueMinimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Depois do cadastro, percorrer o array.
// ☐ Se quantidade < estoqueMinimo, exibir REPOR ESTOQUE; caso contrário, ESTOQUE OK.
// ☐ Exibir nome, quantidade, estoque mínimo e situação.

const entrada = require('readline-sync');

const materiais = [];

for (let i = 0; i < 4; i++) {
    const material = {
        nome: entrada.question(`\nDigite o nome do ${i + 1} produto: `),
        quantidade: entrada.questionInt(`Quantidade atual: `),
        estoqueMinimo: entrada.questionInt(`Estoque minimo: `)
    };
    materiais.push(material);
};
console.log("-".repeat(28))
console.log("    RELATORIO DE ESTOQUE")
console.log("-".repeat(28))
for (let material of materiais) {
    let situacao;

    if (material.quantidade < material.estoqueMinimo) {
        situacao = "REPOR ESTOQUE";
    } else {
        situacao = "ESTOQUE OK";
    };
    console.log(`Nome: ${material.nome}`);
    console.log(`Quantidade: ${material.quantidade}\nMinimo: ${material.estoqueMinimo}\nSituacao: ${situacao}`);
    console.log("-".repeat(28))
};