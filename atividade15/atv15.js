const form = document.getElementById("form");
const formNome = document.myForm[0];
const formEmail = document.getElementById("idemail");
const formComentario = document.getElementById("idcomentario");
const optSim = document.getElementById("idSim");
const optNao = document.getElementById("idNao");
const btnEnviar = document.getElementById("enviar");
const btnLimpar = document.getElementById("limpar");

btnEnviar.addEventListener("submit", (e)=>{
    e.preventDefault();

    ;

})

btnLimpar.addEventListener("submit", (e)=>{
    e.preventDefault();

    formNome.innerHTML = "";
    formEmail.innerHTML = "";
    formComentario.innerHTML = "";

    optSim.addEventListener("change", ()=>{
        if(this.checked)
            optSim.checked = false;
    })

    optNao.addEventListener("change", ()=>{
        if(this.checked)
            optNao.checked = false;
    })

})

