//Voglio generare una password formata da nome+cognome+colore preferito

/* 

    richiedo Nome 
    richiedo cognome
    richiedo colore preferito
    creo e mostro stringa formata dai tre elementi + 23 

*/

const nomePsw = prompt("Inserisci il tuo nome");

const cognomePsw = prompt("Inserisci il tuo cognome");

const colorePsw = prompt("Inserisci il tuo colore preferito");

const annoCorrente = "23";

const psw = nomePsw + cognomePsw + colorePsw + annoCorrente;

document.getElementById("psw").innerHTML = `La tua password è: ${psw}`;
