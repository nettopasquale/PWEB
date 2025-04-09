// inputs maior numero
const max1 = document.getElementById("max1");
const max2 = document.getElementById("max2");
const max3 = document.getElementById("max3");

// inputs crescente
const sort1 = document.getElementById("sort1");
const sort2 = document.getElementById("sort2");
const sort3 = document.getElementById("sort3");

// inputs crescente
const word = document.getElementById("word");

// inputs crescente
const tri1 = document.getElementById("tri1");
const tri2 = document.getElementById("tri2");
const tri3 = document.getElementById("tri3");

//botoes
const botaoMaior = document.getElementById("maior");
const botaoCrescente = document.getElementById("crescente");
const botaoPalindromo = document.getElementById("palindromo");
const botaoTriangulo = document.getElementById("triangulo");

let maiorArray = [];
let crescente = []; 

botaoMaior.addEventListener("click", e => {
    e.preventDefault();

    retornaMaior(max1.value, max2.value, max3.value);

})

botaoCrescente.addEventListener("click", e => {
    e.preventDefault();

    retornaCrescente(sort1.value, sort2.value, sort3.value);
})

botaoPalindromo.addEventListener("click", e => {
    e.preventDefault();

    palindromo(word.value);
})

botaoTriangulo.addEventListener("click", e => {
    e.preventDefault();

    triangulo(tri1.value, tri2.value, tri3.value);
})


function retornaMaior(a, b, c) {
    maiorArray.push(parseInt(a));
    maiorArray.push(parseInt(b));
    maiorArray.push(parseInt(c));

    let maior = maiorArray[0];

    for (let i = 1; i < maiorArray.length; i++){
        if (maiorArray[i] > maior) {
            maior = maiorArray[i];
        }
    }

    document.getElementById("respostaMaior").innerHTML = `O maior número é ${maior}`;
    
}

function retornaCrescente(a, b, c) {
    crescente.push(parseInt(a));
    crescente.push(parseInt(b));
    crescente.push(parseInt(c));

    let cres = crescente.sort((a, b) => a - b)
    
    document.getElementById("respostaCrescente").innerHTML = `A ordem dos números é ${cres}`;
}

function palindromo(str) {
    let temp = str.toString().toUpperCase();
    console.log(temp)
    let len = Math.floor(temp.length / 2);
    let respostaPalindromo = "";

    for (let i = 0; i < len; i++){
        if (temp[i] == temp[temp.length - i - 1])
            respostaPalindromo = `${temp} É Palíndromo!`;
        else
            respostaTriangulo =`${temp} Não é Palíndromo!`;
    }

    document.getElementById("respostaPalindromo").innerHTML = `${respostaPalindromo}`;

}


function triangulo(a, b, c) {
    let respostaTriangulo = "";
    
    if (a < 0 && b < 0 && c < 0) {
        respostaTriangulo = "Dados Inválidos!"
    } else if (a >= b + c) {
        respostaTriangulo = "NÃO FORMA TRIANGULO";
    } else {
        respostaTriangulo = "FORMA TRIÂNGULO!";

        if (a == b && a == c && b == c) {
            respostaTriangulo = "TRIANGULO EQUILÁTERO";
        }
        else if (a == b || a == c || b == c) {
            respostaTriangulo = "TRIANGULO ISOSCELES";
        } else {
            respostaTriangulo = "TRIANGULO ESCALENO";
        }
    } 

    document.getElementById("respostaTriangulo").innerHTML = `${respostaTriangulo}`;

}