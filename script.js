function inserirNome(){
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento =  document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["java", "python", "cobol", "assemble"];

//console.log(linguagens[1]);


let muda = document.querySelector("#lista");
 muda.textContent = linguagens[1];



