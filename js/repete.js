//Estruturas de repetições
//while
//do while
//for
//for in
//for of

let n = 0;
let x = 0;
/*while (n < 3) {
    n++;
    x += n;
    console.log("n: ", n);
    console.log("x: ", x);
}

let i = 0;
do {
    i += 1; //i++
    console.log("i: ", i);
} while (i < 5);

for(let x = 0; x <= 10; x++) {
    console.log("x: ", x);
}

//for in percorre os índices
let a = [1, 2, 3, 4];
for (let i in a){
    console.log("índice:", i, "\nvalor:", a[i]);
} 

//for of percorre os valores
for (let k of a){
    console.log("valor:", k);
}

let texto = "";
const nomes = ["Ana", "Paula", "Anthony", "Guilherme", "Thales"];
//para cada elemento do array, ele vai chamar a função
nomes.forEach(minhaFuncao)

//imprime cada nome no id do HTML
document.getElementById("txt").innerHTML = texto;

// função - o texto impresso consiste do indice em que o nome está : nome na posição e quebra de linha <br>
function minhaFuncao(item, indice/*, teste // aqui ele chama o array*///) {
//    texto += indice + ": " + item + /*teste + //aqui ele coloca o array*///"<br>";
//} 

//*** Funções ***
/*
function nomeFuncao() {
    //codigo
    return valor;
}

nomeFuncao();


let opcao = "lab401";
const funcao2 = function escolher() {
    return opcao = "lab402";
}

console.log(opcao);
console.log(funcao2);
console.log(funcao());


const funcao1 = 5 + 6;
function escolher() {
    return opcao = "lab402";
}

let a = [funcao2(), funcao1, function soma(x, y) { return x + y;}, escolher()];
console.log(a[0]);
console.log(a[1]);
console.log(a[2](10, 5));
console.log(a[3]);


let endereco = {};
console.log(endereco);
endereco.rua = "Avenida das Flores";
endereco.numero = 2010;
endereco.cidade = "Bragança Paulista";
endereco.estado = estado(1);

function estado(x) {
    if (x == 1) {
        return "SP";
    } else {
        return "RJ";
    }
}

console.log(endereco);

function soma(a , b){
    return function(c) {
        console.log(a + b + c);
    }
}

soma(10, 4)(2);

Arrow Functions

function meuNome(nome, sobrenome) {
    console.log(nome + sobrenome);
}

const meuNome = (nome) => {
    console.log(nome);
}
meuNome("Ana Paula");


const mult = (numero) => {
    return 2 * numero;
}
console.log(mult(10));

num = Number(prompt("Entre com um valor: "));
const mult = numero => 2 * numero;
console.log(mult(num));

Funções imediatas
(function(){})();

Factory Function*/

//Função de botão (contador de cliques)
let texto = document.getElementById("txt");
let c = 0;
let button = document.querySelector("button");
//"click" é pré-definido
button.addEventListener("click", () => {
    c = c + 1;
    if(c == 1){
        texto.textContent = c + " clique.";  
    } else{
        texto.textContent = c + " cliques.";
    }
    console.log("botão selecionado!");
})