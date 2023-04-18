Nome Repo: vue-boolzapp
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

## steps

### milestone 1
1. creo il mark-up html della struttura 
2. inizializzo vue e copio l'array degli utenti in data
3. stampo la lista degli utenti in pagina

### milestone 2
1. attivazione al click del contatto
2. visualizzazione nella top bar della chat del contatto attivo
3. ciclo v-for nei messaggi del contatto attivo con binding della classe per gli inviati e i ricevuti

### milestone 3
1. creo una funzione che prende la stringa v-model dell'input, inpacchetta un nuovo oggetto e lo pusha nell'array dei messaggi dell'utente
2. creo una timing function legata all'evento enter del nuvo messaggio che crea un'ulteriore oggetto nuovo nei messaggi del contatto come risposta