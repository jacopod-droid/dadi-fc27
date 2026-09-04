let currentDiceMode = 'd20';

const databaseD20 = [
  { min: 1, max: 2, title: "Tensioni nello Spogliatoio", desc: "Il giocatore con l'overall più alto salta per scelta tecnica la prima partita del mese." },
  { min: 3, max: 4, title: "Stanchezza / Rotazioni", desc: "Alla prima gara del mese schiera titolari almeno 4 riserve (o giocatori <75 overall)." },
  { min: 5, max: 6, title: "Il Pupillo della Chat", desc: "Sondaggio rapido: la chat sceglie una riserva che giocherà almeno 45 minuti nel mese." },
  { min: 7, max: 8, title: "Focus Giovani", desc: "Per tutte le gare del mese schiera titolare fisso almeno un Under 21 o Primavera." },
  { min: 9, max: 12, title: "Spogliatoio Sereno", desc: "Mese tranquillo: nessuna restrizione tattica o di formazione." },
  { min: 13, max: 14, title: "Modulo dalla Chat", desc: "Il modulo per la partita più importante del mese viene scelto dalla chat in live." },
  { min: 15, max: 16, title: "Rotazione Obbligatoria", desc: "Tra una partita e l'altra fai almeno 5 cambi nell'undici titolare." },
  { min: 17, max: 18, title: "Esplosione Primavera", desc: "Promuovi un giovane dal vivaio e dagli almeno una presenza da titolare entro fine mese." },
  { min: 19, max: 20, title: "Rinnovo Chiave", desc: "Rinnova il contratto al giocatore con più presenze (o dagli la fascia di capitano)." }
];

const databaseD6 = [
  { min: 1, max: 2, title: "Spinta Cessione / Fair Play", desc: "MERCATO: Il giocatore spinge per la cessione (accetta o max +20%). / INIZIO STAGIONE: Spendi max 50% budget." },
  { min: 3, max: 4, title: "Trattativa Libera / Standard", desc: "MERCATO: Piena libertà di trattare o rifiutare. / INIZIO STAGIONE: Gestione standard del budget." },
  { min: 5, max: 6, title: "Amore Maglia / Saldo Zero", desc: "MERCATO: Il giocatore rifiuta l'offerta e resta. / INIZIO STAGIONE: Mercato a Saldo Zero (compri solo se vendi)." }
];

function setMode(mode) {
  currentDiceMode = mode;
  
  const btnD20 = document.getElementById('btn-mode-d20');
  const btnD6 = document.getElementById('btn-mode-d6');
  const titleDisplay = document.getElementById('result-title');
  const descDisplay = document.getElementById('result-desc');
  const diceDisplay = document.getElementById('dice-display');

  if (mode === 'd20') {
    btnD20.classList.add('active');
    btnD6.classList.remove('active');
    titleDisplay.innerText = "Modalità D20 Attiva";
    descDisplay.innerText = "Clicca su LANCIA DADO per estrarre l'imprevisto.";
  } else {
    btnD6.classList.add('active');
    btnD20.classList.remove('active');
    titleDisplay.innerText = "Modalità D6 Attiva";
    descDisplay.innerText = "Clicca su LANCIA DADO per l'esito mercato/bilancio.";
  }

  diceDisplay.innerText = "?";
}

function executeRoll() {
  const diceDisplay = document.getElementById('dice-display');
  const rollBtn = document.getElementById('roll-button');
  const titleDisplay = document.getElementById('result-title');
  const descDisplay = document.getElementById('result-desc');

  const maxLimit = currentDiceMode === 'd20' ? 20 : 6;
  const currentDataset = currentDiceMode === 'd20' ? databaseD20 : databaseD6;

  rollBtn.disabled = true;
  diceDisplay.classList.add('animating');

  setTimeout(() => {
    const rolledNumber = Math.floor(Math.random() * maxLimit) + 1;
    
    diceDisplay.classList.remove('animating');
    diceDisplay.innerText = rolledNumber;

    const outcome = currentDataset.find(item => rolledNumber >= item.min && rolledNumber <= item.max);

    if (outcome) {
      titleDisplay.innerText = `[${rolledNumber}] ${outcome.title}`;
      descDisplay.innerText = outcome.desc;
    }

    rollBtn.disabled = false;
  }, 700);
}
