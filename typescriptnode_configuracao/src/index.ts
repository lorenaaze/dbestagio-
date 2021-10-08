// for(let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// let j = 0
// while (j<20) {
//     j++
//     if (j % 2 == 0) {
//         console.log(j)
//     }
// }

// let i: number = 0;
// while (i != 10) {
//     i += 0.2;
//     console.log(i);
// }

/*1. Crie uma classe que represente um Círculo. Esta classe deve possuir as propriedades de um ponto central
(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo e do comprimento
da circunferência. Escreva um bloco de código para testar a implementação do círculo.*/

// class Circulo {
//     constructor(private _x: number, 
//         private _y: number, 
//         private _r: number
//     ) {}

//     get x() {
//         return this._x;
//     }

//     area() {
//         return (Math.PI * (this._r**2)).toFixed(2);
//     }

//     comprimento() {
//         return (2 * Math.PI * this._r).toFixed(2);
//     }
// }

// let c1 = new Circulo(8, 10, 5);
// console.log(c1.area());
// console.log(c1.comprimento());

/* 2a) Implemente as classes correspondentes em TypeScript. Você pode implementar os métodos get
apresentados na classe Moeda como: campos somente de leitura, métodos de acesso ou propriedades
de leitura. Utilize uma coleção adequada para implementar a coleção de moedas na classe Cofrinho.*/

class Moeda {
    constructor(private _valor: number,
        private _nome: string
    ) {}

    get valor() {
        return this._valor;
    }

    get nome() {
        return this._nome;
    }
}

class Cofrinho {
    constructor(private _moedas: Moeda[] = []) {}

    adicionar(moeda: Moeda) {
        this._moedas.push(moeda);
    }

    calcularTotal() {
        let total = 0
        this._moedas.forEach(moeda => {
            total += moeda.valor
        });
        return total;
    }

    menorMoeda() {
        let menor: number[] = [];
        for(let i of this._moedas) {
            menor.push(i.valor)
        }
        return Math.min(...menor);
    }
}

let c1 = new Cofrinho();
c1.adicionar(new Moeda(1, "real"));
c1.adicionar(new Moeda(0.50, "centavos"));
c1.adicionar(new Moeda(0.25, "centavos"));
console.log(c1.calcularTotal());
console.log(JSON.stringify(c1));
console.log(c1.menorMoeda());
