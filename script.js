
function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == ""){
        section.innerHTML = "Nenhum texto digitado!";
        return;
    }

    let resultados = "";
    let nome = "";
    let descricao = "";
    for (let dado of dados){
        nome = dado.nome.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += 
        `
            <div class="item-resultado">
                <div class="Divcom">
                    <img src="${dado.src}.jpg" alt="${dado.alt}">
                </div>
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
            </div>
        `
        }
        
    }
    if(!resultados) {
        resultados = "<p>Resultado não Encontrado</p>"
    }     
    section.innerHTML = resultados;
}
 