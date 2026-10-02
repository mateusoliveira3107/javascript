const entrada = require('readline-sync');
const fs = require('fs');

const matricula = entrada.questionInt("Digite a matricula: ");

const textoFuncionarios = fs.readFileSync('funcionarios.json');
const funcionarios = JSON.parse(textoFuncionarios);

let numFuncionario = 0

function buscarFuncionario (fun) {
    for (let f of fun) {
        if (f.matricula === matricula) {
        return true;
        };
    numFuncionario += 1
    };
};

const funcionarioAchado = buscarFuncionario(funcionarios)

if(funcionarioAchado === true) {
    console.log("---".repeat(8))
    console.log("Funcionario encontrado!");
    console.log(`Nome: ${funcionarios[numFuncionario].nome}`);
    console.log(`Setor: ${funcionarios[numFuncionario].setor}`);
    console.log(`Cargo: ${funcionarios[numFuncionario].cargo}`);
} else {
    console.log("Funcionario nao encontrado.");
};
    