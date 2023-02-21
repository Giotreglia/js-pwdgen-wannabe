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

document.getElementById("psw").innerHTML = `${psw}`;

//trigger

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Copied!')
  })
}
