const nome = "Genival";
const interesses = ["Programação", "Jogos Digitais", "Criação de Sites", "Eletrônica e Arduino", "Inteligência Artificial"];

function saudar (hora) {
    if (hora < 12) {
        console.log("Bom dia! Eu sou o " + nome + ".");
    } else if (hora < 18) {
        console.log("Boa tarde! Eu sou o " + nome + ".");
    } else {
        console.log("Boa noite! Eu sou o " + nome + ".");
    }
}

saudar(6);
saudar(14);
saudar(18);

console.log("Meus interesses são:");
for (let i = 0; i < interesses.length - 1; i++) {
    console.log("- " + interesses[i] + ",");
}
console.log("- " + interesses[interesses.length - 1]);
console.log(interesses.length);