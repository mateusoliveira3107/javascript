const fs = require('fs')

const equipamentos = [
    {codigo: 1, nome: "torno", setor: "Manutencao", operacional: true},
    {codigo: 2, nome: "empilhadeira", setor: "Logistica", operacional: false},
    {codigo: 3, nome: "betoneira", setor: "Construcao", operacional: true},
];

const textoEquipamentos = JSON.stringify(equipamentos, null, 2);

function salvar () {
    fs.writeFileSync("equipamentos.json", textoEquipamentos);

    console.log("Equipamentos Salvos.")
}

salvar();