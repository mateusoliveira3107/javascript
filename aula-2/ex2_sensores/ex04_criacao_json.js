const fs = require('fs');

const sensores = [
    {codigo: 1, tipo: "temperatura", valor: 35.00, unidade: 2, status: "alerta"},
    {codigo: 2, tipo: "umidade", valor: 30.00, unidade: 4, status: "alerta"},
    {codigo: 3, tipo: "movimento", valor: 20.00, unidade: 3, status: "normal"},
    {codigo: 4, tipo: "luz", valor: 40.00, unidade: 2, status: "normal"},
    {codigo: 5, tipo: "pressao", valor: 50.00, unidade: 1, status: "alerta"}
];

const textoSensores = JSON.stringify(sensores, null, 2);

fs.writeFileSync('monitoramento.json', textoSensores);