// chiedo all'utente il suo nome, cognome e colore preferito

const nomeUtente = prompt('Inserisci il tuo nome');
console.log(nomeUtente);

const cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

const colorePreferito = prompt('Inserisci il colore preferito');
console.log(colorePreferito);

// scrittura su pagina

document.getElementById('dati').innerHTML = `
Ciao <strong>${nomeUtente}</strong> <strong>${cognomeUtente}</strong>, <br>
il tuo colore preferito é <strong>${colorePreferito}</strong>.
`;