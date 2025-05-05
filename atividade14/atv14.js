let text = document.getElementById("idNome");
let btn = document.getElementById("transform");

const optionMai = document.getElementById("optionMaiuscula");
const optionMin = document.getElementById("optionMinuscula");

// optionMai.addEventListener("change")

// function transformText(){

optionMai.addEventListener('change', function(){
    if(this.checked){
        text.value = text.value.toUpperCase();
        console.log(text.value)
    }
})

optionMin.addEventListener('change', function(){
    if(this.checked){
        text.value = text.value.toLowerCase();
        console.log(text.value)
    }
})

    // btn.addEventListener('click', function(e){
    //     e.preventDefault();
    //     let nome = text.value;

    //     if(nome == "" || nome.length < 3){
    //         alert("Preencha corretamente o campo!");
    //         text.focus();
    //         return;
    //     }
    // })
    

