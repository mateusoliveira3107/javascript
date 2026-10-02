const fs = require('fs');

const medicoes = [
    {codigo: 1, temperatura: 360},
    {codigo: 2, temperatura: 220},
    {codigo: 3, temperatura: 170},
    {codigo: 4, temperatura: 320},
    {codigo: 5, temperatura: 410}
];

const textoMedicoes = JSON.stringify(medicoes, null, 2);

fs.writeFileSync('temperaturas.json', textoMedicoes);