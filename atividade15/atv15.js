const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formNome = document.forms["myForm"].elements["nome"];
    const formEmail = document.getElementById("idemail");
    const formComentario = document.getElementById("idcomentario");
    const optionRadio = document.querySelector("input[name='option']:checked");
    const optSim = document.getElementById("idSim");

    let formValido = true;

    //Valida nome
    if (formNome.value.trim().length < 10) {
        alert("Por favor preencha um nome!");
        formNome.classList.add("inputErrado");
        formNome.focus();
        formValido = false;

    }else {
        formNome.classList.add("inputCorreto");
    }

    //Valida email
    if (!formEmail.checkValidity()) {
        alert("Por favor preencha um email!");
        formEmail.classList.add("inputErrado");
        if (formValido) {
            formEmail.focus();
        }
        formValido = false;

    } else {
        formEmail.classList.add("inputCorreto");
    }

    //valida comentario
    if (formComentario.value.trim().length < 20) {
        alert("Por favor digite um comentário!");
        formComentario.classList.add("inputErrado");
        if (formValido) {
        }
        formValido = false;

    }else {
        formComentario.classList.add("inputCorreto");
    }

    //valida radios
    if (!optionRadio) {
        alert("Selecione uma das opções!");
        if (formValido) {
            optSim.classList.add("inputErrado");
            optSim.focus();
        }
        formValido = false;
    }
    
    
    if (formValido) {
        if (optionRadio.value === "sim") {
            alert("Volte sempre à esta página!");
            optSim.classList.remove("inputErrado");
        } else if(optionRadio.value === "nao") {
            alert("Que bom que você voltou a visitar esta página!");
        }

        alert("Sucesso!");
        form.submit();
    } else {
        alert("Por favor, corrija os campos destacados!");
    }
 
})
