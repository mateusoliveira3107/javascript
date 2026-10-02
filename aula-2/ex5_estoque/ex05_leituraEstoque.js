const fs = require('fs');

const leituraJson = fs.readFileSync('materiais.json');
const materiais = JSON.parse(leituraJson);

function calcularItens(itens) {
    for (let i of itens) {
        let valorEmEstoque = 0;

        valorEmEstoque += (i.quantidade * i.valorUnitario);
        
        console.log()
        console.log(i.descricao);
        console.log(`Quantidade: ${i.quantidade}`);
        console.log(`Valor unitario: ${i.valorUnitario}`);
        console.log(`Valor em estoque: R$${valorEmEstoque.toFixed(2)}`);
    };
};

calcularItens(materiais);