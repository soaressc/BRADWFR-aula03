//import pessoa from './pessoa.js'; // para exportação default, podemos personalizar a importação

// obrigatório usar o nome atribuído na exportação
//import { limpar } from './util.js';
//import { baseDados } from './util.js';

// ou
//import { limpar, baseDados } from './util.js';

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    imprimirNome() {
        console.log(this.nome, " ", this.sobrenome)
    }
}

nome = prompt("Nome: ");
sobrenome = prompt("Sobrenome: ");
novapessoa = new Pessoa(nome, sobrenome);
novapessoa.imprimirNome();