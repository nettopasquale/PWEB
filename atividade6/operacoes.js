const button = document.querySelector("button");
let apertado = confirm("Vamos apertar o botão?")

button.addEventListener("click", e => {
    e.preventDefault;

    if (apertado) {
        let num1 = parseFloat(prompt("Informe o primeiro número: "));
        let num2 = parseFloat(prompt("Informe o segundo número: "));
        
        alert(`A soma dos números é: ${soma(num1, num2)}`);
        alert(`A subtracão dos números é: ${subtracao(num1, num2)}`);
        alert(`A multiplicação dos números é: ${multi(num1, num2)}`);
        alert(`A divisão dos números é: ${divi(num1, num2)}`);
        alert(`O resto da divisão dos números é: ${resto(num1, num2)}`);
        
    }
    else {
        alert("Vamos lá, aperte o botão...");
    }

})


const soma = (n1, n2) => {
    return n1 + n2;
}

const subtracao = (n1, n2) => {
    return n1 - n2;
}

const multi = (n1, n2) => {
    return n1 * n2;
}

const divi = (n1, n2) => {
    return (n1 / n2).toFixed(2);
}

const resto = (n1, n2) => {
    return n1 % n2;
}