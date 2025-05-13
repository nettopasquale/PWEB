const curso = true;

if (curso) {
    window.onload = function () {
        document.querySelector("span").innerHTML = `
            
            <h2>Escolha um curso da Fatec Sorocaba:</h2>
            <select name="cursosFatecSorocava" id="cursos">
                <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                <option value="ea">Eletrônica Automotiva</option>
                <option value="fm">Fabricação Mecânica</option>
                <option value="ge">Gestão Empresarial</option>
                <option value="gq">Gestão de Qualidade</option>
                <option value="log">Logística</option>
                <option value="ma">Manufatura Avançada</option>
                <option value="mada">Manutenção de Aeronaves</option>
                <option value="pol">Polímeros</option>
                <option value="pm">Processos Metalúrgicos</option>
                <option value="sb">Sistemas Biométricos</option>
                <option value="pme">Projetos Mecânicos</option>
            </select>
             
         `
        
        const cursos = document.getElementById("cursos");
        
        cursos.addEventListener("change", () => {
        let cursoTexto = cursos.options[cursos.selectedIndex].text;
        let cursoValue = cursos.options[cursos.selectedIndex].value;
    
        window.open(`confirmacao.html?curso=${cursoValue}`, `Janela Confirmação do curso ${cursoTexto}`, "width=600, height=300");
        
        })
        
    };
    
}


