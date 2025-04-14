let altura = parseFloat(prompt("informe sua altura: "));
let peso = parseFloat(prompt("informe seu peso: "));
let grau_magreza = [0,0, 1, 2, 3];
let classificação = ["magreza","normal", "sobrepeso", "obesidade", "obesidade grave"];
let imc;


function calculaIMC(altura, peso){
    imc  = (peso/ Math.pow(altura, 2)).toFixed(2);
    
    switch(true){
        case imc > 40:
        console.log(`Seu IMC é igual: ${imc}, índice de magreza: ${grau_magreza[4]}, 
            classificação: ${classificação[4]}`);
        break;
        case imc >= 30 && imc < 40:
        console.log(`Seu IMC é igual: ${imc}, índice de magreza: ${grau_magreza[3]}, 
            classificação: ${classificação[3]}`);
        break;
        case imc >= 25 && imc < 30:
        console.log(`Seu IMC é igual: ${imc}, índice de magreza: ${grau_magreza[2]}, 
            classificação: ${classificação[2]}`);
        break;
        case imc >= 18.5 && imc < 25:
        console.log(`Seu IMC é igual: ${imc}, índice de magreza: ${grau_magreza[1]}, 
            classificação: ${classificação[1]}`);
        break;
        case imc < 18.5:
        console.log(`Seu IMC é igual: ${imc}, índice de magreza: ${grau_magreza[1]}, 
            classificação: ${classificação[1]}`);
        break;
        default:
            console.log("Algo deu errado :(");
    }

}

calculaIMC(altura, peso);