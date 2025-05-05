const txtTitle = document.getElementById("textTitle");
const imgJanela = document.getElementById("imgJanela");

imgJanela.addEventListener("mouseover", function () {
    txtTitle.textContent = "Janela Aberta";
    imgJanela.src = "/imgs/janelaaberta.png"
})

imgJanela.addEventListener("mouseout", function () {
    txtTitle.textContent = "Janela Fechada";
    imgJanela.src = "/imgs/janelafechada.png"
})

imgJanela.addEventListener("click", function () {
    txtTitle.textContent = "Janela Quebrada";
    imgJanela.src = "/imgs/janelaquebra.png"
})

