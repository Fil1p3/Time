document.getElementById('fute').addEventListener('submit', function(event) {
    event.preventDefault();

    const timeCasa = document.getElementById('timeCasa').value;
    const timeVisi = document.getElementById('timeVisi').value;
    const casaP = parseInt(document.getElementById('casaP').value, 10);
    const visiP = parseInt(document.getElementById('visiP').value, 10);
    const result = document.getElementById('resultado');

    let message = `${timeCasa} ${casaP} x ${visiP} ${timeVisi}<br>`;

    if (casaP > visiP) {
        message += `O time vencedor é ${timeCasa}`;
    } else if (visiP > casaP) {
        message += `O time vencedor é ${timeVisi}`;
    } else {
        message += 'O jogo terminou em empate.';
    }

    result.innerHTML = message;
});
