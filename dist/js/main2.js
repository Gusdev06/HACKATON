var proximoBotao=document.querySelector(".proximo"),secoes=[document.getElementById("section1"),document.getElementById("section2"),document.getElementById("section3")],secaoAtual=0;proximoBotao.addEventListener("click",function(){secoes[secaoAtual].style.display="none",++secaoAtual>=secoes.length&&(secaoAtual=0),secoes[secaoAtual].style.display="flex"});