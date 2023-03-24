const entrada = require("readline-sync");

let conta: number = parseInt(entrada.question("Digite o numero da sua conta: "));
let senha: number = parseInt(entrada.question("Digite seu Pin: "));
let cpf: number = 48592052866;
let saldo: number = 1000

if(conta != cpf && senha != cpf){
    console.log("Pin invalido")
}
else{
console.log(`Olaa! seu saldo é de R$${saldo}`);
console.log("O que voce deseja...")
console.log("")
console.log("Opção 1: Saque:")
console.log("Opção 2: Deposito:")
console.log("Opção 3: Sair")


let op: number = parseInt(entrada.question("Escolha uma das opcao: "));

if (op == 1){
    let sacar: number = parseFloat(entrada.question("Qual valor você deseja retirar?: "))
    if(sacar > saldo){
        console.log("Valor invalido")
    }
    else{
    let senha1: number = parseInt(entrada.question("Digite seu Pin: "))
    
    if(senha1 != cpf){
        console.log("Pin incorreto")
    }
    else{

    if(senha == cpf){
        console.log(`Seu saldo é de R$${saldo - sacar}`)
    }
    else{
        console.log("Pin incorreto")
}}}}

else if(op == 2){
    let depositar: number = parseFloat(entrada.question("Quanto deseja depositar: "))
    let senha2 : number = parseInt(entrada.question("Digite seu Pin: "))

    if(senha2 == cpf){
        console.log(`Seu saldo é de R$${saldo + depositar}`)
    }
    else{
        console.log("Pin incorreto")
    }
}

else if(op == 3){
    console.log("Volte sempre")
}}
