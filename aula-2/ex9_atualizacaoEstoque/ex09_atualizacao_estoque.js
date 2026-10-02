const fs = require('fs');
const entrada = require('readline-sync');

const leituraMateriais = fs.readFileSync('../ex3_estoque/materiais.json');
const materiais = JSON.parse(leituraMateriais);

const codigoMaterial = entrada.questionInt("Informe o codigo do material: ");

const materialEscolhido = materiais[codigoMaterial - 1];

console.log(`Quantidade atual de ${materialEscolhido.descricao}: ${materialEscolhido.quantidade}`);


fs.writeFileSync('materiais_backup.json', leituraMateriais);


const novaQuantidade = entrada.questionInt("\nInforme uma nova quantidade: ");

materialEscolhido.quantidade = novaQuantidade;
const novoEstoque = JSON.stringify(materiais, null, 2);

fs.writeFileSync('../ex3_estoque/materiais.json', novoEstoque);