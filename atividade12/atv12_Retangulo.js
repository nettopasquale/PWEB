function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;
    this.calcArea = function(){
        console.log(`A área do retângulo é de ${base * altura}cm²`)
    }
}

const novoRetangulo = new Retangulo(4, 5);
novoRetangulo.calcArea();