const comuni = [
    'AGUGLIARO'
    , 'ALBETTONE'
    , 'ALONTE'
    , 'ALTAVILLA VICENTINA'
    , 'ALTISSIMO'
    , 'ARCUGNANO'
    , 'ARSIERO'
    , 'ARZIGNANO'
    , 'ASIAGO'
    , 'ASIGLIANO VENETO'
    , 'BARBARANO MOSSANO'
    , 'BASSANO DEL GRAPPA'
    , 'BOLZANO VICENTINO'
    , 'BREGANZE'
    , 'BRENDOLA'
    , 'BRESSANVIDO'
    , 'BROGLIANO'
    , 'CALDOGNO'
    , 'CALTRANO'
    , 'CALVENE'
    , 'CAMISANO VICENTINO'
    , 'CAMPIGLIA DEI BERICI'
    , 'CARRE'
    , 'CARTIGLIANO'
    , 'CASSOLA'
    , 'CASTEGNERO'
    , 'CASTELGOMBERTO'
    , 'CHIAMPO'
    , 'CHIUPPANO'
    , 'COGOLLO DEL CENGIO'
    , 'COLCERESA'
    , 'CORNEDO VICENTINO'
    , 'COSTABISSARA'
    , 'CREAZZO'
    , 'CRESPADORO'
    , 'DUEVILLE'
    , 'ENEGO'
    , 'FARA VICENTINO'
    , 'FOZA'
    , 'GALLIO'
    , 'GAMBELLARA'
    , 'GAMBUGLIANO'
    , 'GRISIGNANO DI ZOCCO'
    , 'GRUMOLO DELLE ABBADESSE'
    , 'ISOLA VICENTINA'
    , 'LAGHI'
    , 'LASTEBASSE'
    , 'LONGARE'
    , 'LONIGO'
    , 'LUGO DI VICENZA'
    , 'LUSIANA CONCO'
    , 'MALO'
    , 'MARANO VICENTINO'
    , 'MAROSTICA'
    , 'MONTE DI MALO'
    , 'MONTEBELLO VICENTINO'
    , 'MONTECCHIO MAGGIORE'
    , 'MONTECCHIO PRECALCINO'
    , 'MONTEGALDA'
    , 'MONTEGALDELLA'
    , 'MONTEVIALE'
    , 'MONTICELLO CONTE OTTO'
    , 'MONTORSO VICENTINO'
    , 'MUSSOLENTE'
    , 'NANTO'
    , 'NOGAROLE VICENTINO'
    , 'NOVE'
    , 'NOVENTA VICENTINA'
    , 'ORGIANO'
    , 'PEDEMONTE'
    , 'PIANEZZE'
    , 'PIOVENE ROCCHETTE'
    , 'POJANA MAGGIORE'
    , 'POSINA'
    , 'POVE DEL GRAPPA'
    , 'POZZOLEONE'
    , 'QUINTO VICENTINO'
    , 'RECOARO TERME'
    , 'ROANA'
    , 'ROMANO D EZZELINO'
    , 'ROSA'
    , 'ROSSANO VENETO'
    , 'ROTZO'
    , 'SALCEDO'
    , 'SAN PIETRO MUSSOLINO'
    , 'SAN VITO DI LEGUZZANO'
    , 'SANDRIGO'
    , 'SANTORSO'
    , 'SARCEDO'
    , 'SAREGO'
    , 'SCHIAVON'
    , 'SCHIO'
    , 'SOLAGNA'
    , 'SOSSANO'
    , 'SOVIZZO'
    , 'TEZZE SUL BRENTA'
    , 'THIENE'
    , 'TONEZZA DEL CIMONE'
    , 'TORREBELVICINO'
    , 'TORRI DI QUARTESOLO'
    , 'TRISSINO'
    , 'VALBRENTA'
    , 'VAL LIONA'
    , 'VALDAGNO'
    , 'VALDASTICO'
    , 'VALLI DEL PASUBIO'
    , 'VELO D ASTICO'
    , 'VICENZA'
    , 'VILLAGA'
    , 'VILLAVERLA'
    , 'ZANE'
    , 'ZERMEGHEDO'
    , 'ZOVENCEDO'
    , 'ZUGLIANO'
];

const RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameArea = document.getElementById('gameArea');


comuni.forEach((comune, i) => {

    const splittedComune = comune.split('');
    const comuneMischiato = [];


    while (splittedComune.length > 0) {
        const randomIndex = RandomNumberGenerator(0, splittedComune.length - 1);
        comuneMischiato.push(
            splittedComune.splice(
                randomIndex,
                1
            )
        )
    }

    let comuneMischiatoUnito = comuneMischiato.join('');

    console.log(`${comune} >`, comuneMischiatoUnito)

    gameArea.innerHTML += `
        <div class="row"> 
            <div class="col-3 text-center">
                <p id="comuneMischiato1">${comuneMischiatoUnito}</p>
            </div>
            <div class="col-3">
                <form class="formComune" rispostaCorretta="${comune}">
                    <input type="text" class="insertedComune">
                    <button type="submit">INVIA!</button>
                </form>
            </div>
            <div class="col-6">
                <p class="console"></p>
            </div>
        </div>
    `;



});


const forms = document.querySelectorAll('.formComune');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const rispostaUtente = form.querySelector('.insertedComune').value.toLowerCase();
        const rispostaCorretta = form.getAttribute('rispostaCorretta').toLowerCase();

        const risultato = form.parentNode.parentNode.querySelector('.console');

        if (rispostaCorretta === rispostaUtente) {
            risultato.classList.add('text-success')
            risultato.classList.remove('text-danger')
            risultato.innerText = 'giusto!'
        }
        else {
            risultato.classList.add('text-danger')
            risultato.classList.remove('text-success')
            risultato.innerText = 'sbagliato!'

        }

    })
});

