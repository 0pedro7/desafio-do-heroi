let nomeDoHeroi = ("Ferdinando")
let XPdoHeroi = 19000
let nivel

if(XPdoHeroi < 1000){
nivel = "Ferro"
}

else if (XPdoHeroi >= 1001 && XPdoHeroi <= 2000) {
    nivel = "Bronze";
}

else if(XPdoHeroi >= 2001 && XPdoHeroi <= 5000){
nivel = "Prata"
}

else if(XPdoHeroi >= 6001 && XPdoHeroi <= 7000){
nivel = "Ouro"
}

else if(XPdoHeroi >= 7001 && XPdoHeroi <= 8000){
nivel = "Platina"
}

else if(XPdoHeroi >= 8001 && XPdoHeroi <= 9000){
nivel = "Ascendente"
}

else if(XPdoHeroi >= 9001 && XPdoHeroi <= 10000){
nivel = "Imortal"
}

else(nivel = "radiante")

console.log("O herói de nome: " + nomeDoHeroi + "Está no nível de: " + nivel)