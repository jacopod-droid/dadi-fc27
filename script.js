document.addEventListener("DOMContentLoaded", function() {
  
  let currentMode = 'd20';

  const dataD20 = [
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

  const dataD6 = [
    { min: 1, max: 2, title: "Spinta Cessione / Fair Play", desc: "MERCATO: Il giocatore spinge per la cessione (accetta o max +20%). / INIZIO STAGIONE: Spendi max 50% budget." },
    { min: 3, max: 4, title: "Trattativa Libera / Standard", desc: "MERCATO: Piena libertà di trattare o rifiutare. / INIZIO STAGIONE: Gestione standard del budget." },
    { min: 5, max: 6, title: "Amore Maglia / Saldo Zero", desc: "MERCATO: Il giocatore rifiuta l'offerta e resta. / INIZIO STAGIONE: Mercato a Saldo Zero (compri solo se vendi)." }
  ];

  const btnD20 = document.getElementById('btn-d20');
  const btnD6 = document.getElementById('btn-d6');
  const rollBtn = document.getElementById('roll-button');
  const diceDisplay = document.getElementById('dice-display');
  const resTitle = document.getElementById('result-title');
  const resDesc = document.getElementById('result-desc');

  btnD20.onclick = function() {
    currentMode = 'd20';
    btnD20.classList.add('active');
    btnD6.classList.remove('active');
    diceDisplay.innerText = '?';
    resTitle.innerText = "Modalità D20 Attiva";
    resDesc.innerText = "Clicca su LANCIA DADO per estrarre l'imprevisto.";
  };

  btnD6.onclick = function() {
    currentMode = 'd6';
    btnD6.classList.add('active');
    btnD20.classList.remove('active');
    diceDisplay.innerText = '?';
    resTitle.innerText = "Modalità D6 Attiva";
    resDesc.innerText = "Clicca su LANCIA DADO per l'esito mercato/bilancio.";
  };

  rollBtn.onclick = function() {
    rollBtn.disabled = true;
    const maxVal = currentMode === 'd20' ? 20 : 6;
    const currentDataset = currentMode === 'd20' ? dataD20 : dataD6;

    let counter = 0;
    const interval = setInterval(function() {
      diceDisplay.innerText = Math.floor(Math.random() * maxVal) + 1;
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        const finalVal = Math.floor(Math.random() * maxVal) + 1;
        diceDisplay.innerText = finalVal;

        const outcome = currentDataset.find(item => finalVal >= item.min && finalVal <= item.max);
        if (outcome) {
          resTitle.innerText = "[" + finalVal + "] " + outcome.title;
          resDesc.innerText = outcome.desc;
        }
        rollBtn.disabled = false;
      }
    }, 50);
  };

});
