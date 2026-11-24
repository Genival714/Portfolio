const nome = "Genival";

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