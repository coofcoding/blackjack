import _ from 'underscore';
import { createDeck, pedirCarta, crearCarta, turnoComputadora, acumularPuntos, validarGanador } from './usecases';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


(() => {
    'use strict'

    const botonNuevo = document.querySelector('#btnNuevo'),
        botonPedir = document.querySelector('#btnPedir'),
        botonDetener = document.querySelector('#btnDetener'),
        puntajes = document.querySelectorAll('span'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

    let deck = [],
        puntosJugadores = [];
    // puntosJugador = 0,
    // puntosComputadora = 0;

    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    const inicializarJuego = (numJugadores = 2) => {
        deck = createDeck( tipos, especiales );
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    }

    botonPedir.addEventListener('click', () => {

        const carta = pedirCarta( deck );

        acumularPuntos(carta, 0, puntosJugadores, puntajes);
        crearCarta(carta, 0, divCartasJugadores);

        validarGanador(0, puntosJugadores, botonPedir, botonDetener, deck, puntajes, divCartasJugadores);

    })

    botonDetener.addEventListener('click', () => {
        botonPedir.disabled = true;
        botonDetener.disabled = true;

        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntajes, divCartasJugadores, botonPedir, botonDetener);
    });

    botonNuevo.addEventListener('click', () => history.go(0), inicializarJuego());

})();
