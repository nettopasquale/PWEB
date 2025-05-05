let text = document.getElementById("idNome");
let btn = document.getElementById("transform");

const optionMai = document.getElementById("optionMaiuscula");
const optionMin = document.getElementById("optionMinuscula");


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

