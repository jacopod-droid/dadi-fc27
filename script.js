const imprevisti = [
  // Fascia 1 - 4
  { range: [1, 2], title: "Tensioni nello Spogliatoio", desc: "Il tuo giocatore con l'overall più alto salta per scelta tecnica la prima partita del mese." },
  { range: [3, 4], title: "Stanchezza / Rotazioni", desc: "Alla prima gara del mese devi schierare titolari almeno 4 riserve (o <75 overall)." },
  
  // Fascia 5 - 8
  { range: [5, 6], title: "Il Pupillo della Chat", desc: "Sondaggio rapido: la chat sceglie una riserva che giocherà almeno 45 minuti nel mese." },
  { range: [7, 8], title: "Focus Giovani", desc: "Per tutte le gare del mese schiera titolare fisso almeno un U21 o Primavera." },
  
  // Fascia 9 - 12
  { range: [9, 12], title: "Spogliatoio Sereno", desc: "Mese tranquillo: nessuna restrizione tattica o di formazione." },
  
  // Fascia 13 - 16
  { range: [13, 14], title: "Modulo dalla Chat", desc: "Il modulo per la partita più importante del mese viene scelto dalla chat in live." },
  { range: [15, 16], title: "Rotazione Obbligatoria", desc: "Tra una partita e l'altra fai almeno 5 cambi nell'undici titolare." },
  
  // Fascia 17 - 20
  { range: [17, 18], title: "Esplosione Primavera", desc: "Promuovi un giovane dal vivaio e dagli almeno una presenza da titolare entro fine mese." },
  { range: [19, 20], title: "Rinnovo Chiave", desc: "Rinnova il contratto al giocatore con più presenze (o dagli la fascia di capitano)." }
];

function rollD20() {
  const diceDisplay = document.getElementById('dice-display');
  const btn = document.getElementById('roll-btn');
  const titleEl = document.getElementById('title');
  const descEl = document.getElementById('description');

  btn.disabled = true;
  diceDisplay.classList.add('rolling');
  
  // Simulazione animazione di roll (1 secondo)
  setTimeout(() => {
    const rolledValue = Math.floor(Math.random() * 20) + 1;
    diceDisplay.classList.remove('rolling');
    diceDisplay.innerText = rolledValue;

    // Trova l'imprevisto corrispondente al numero estratto
    const risultato = imprevisti.find(item => rolledValue >= item.range[0] && rolledValue <= item.range[1]);

    if (risultato) {
      titleEl.innerText = `[${rolledValue}] ${risultato.title}`;
      descEl.innerText = risultato.desc;
    }

    btn.disabled = false;
  }, 800);
}