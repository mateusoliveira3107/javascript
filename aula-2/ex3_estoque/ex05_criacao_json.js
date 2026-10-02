const fs = require('fs');

const materiais = [
    {codigo: 1, descricao: "aco carbono", quantidade: 100, valorUnitario: 20.00},
    {codigo: 2, descricao: "tijolo", quantidade: 200, valorUnitario: 15.00},
    {codigo: 3, descricao: "aluminio", quantidade: 400, valorUnitario: 5.00},
    {codigo: 4, descricao: "plastico", quantidade: 250, valorUnitario: 10.00}
];

const textoMateriais = JSON.stringify(materiais, null, 2);

fs.writeFileSync('materiais.json', textoMateriais);
