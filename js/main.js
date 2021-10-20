/* Chiediamo il nome all'utente */
const name = prompt('Quale è il tuo nome?');


/* Chiediamo il cognome all'utente */
const surname = prompt('Quale è il tuo cognome?');

/* Chiediamo il suo colore preferito */
const color = prompt('Quale è il tuo colore preferito?');


/* Scrivere i dati ricevuti sulla pagina */
// Scrivere i dati con l'operatore di concatenazione
/* document.getElementById('result').innerHTML = name + surname + color + '21' */

// Scrivere i dati con i Template Literal
document.getElementById('result').innerHTML = `${name}${surname}${color}21`
