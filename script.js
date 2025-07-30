function inserirNome(){
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento =  document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();


let lin = prompt("escolha um numero de 0 a 3?");


let linguagens = ["java", "python", "cobol", "assemble"];
console.log(linguagens);

let muda = document.querySelector("#lista");
 muda.textContent = linguagens[0] + " - " + linguagens[1] + " - " + linguagens[2]+ " - " + linguagens[3];


let aluno1 = {
    nome: "Roger",
    idade: 39,
    anoLetivo: "5ªsérie",
    materiasFavoritas: ["Física", 'Programação', "Robótica"]
}

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.materiasFavoritas;