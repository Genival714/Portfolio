const nome = "Genival";

function saudar (hora) {
    if (hora < 12) {
        console.log("Bom dia! Eu sou o " + nome);
    } else {
        console.log("Boa tarde! Eu sou o " + nome);
    }
}

saudar(6);
saudar(14);