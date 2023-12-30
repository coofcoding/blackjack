
(() => {
    'use strict'

    const botones = document.querySelector('#nav-buttons'),
        botonNuevo = document.querySelector('#btnNuevo'),
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
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    }

    const crearDeck = () => {

        for (let i = 2; i <= 10; i++) {

            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);

    }

    const pedirCarta = () => (deck.length === 0 ? Swal.fire({ title: "Oh, oh!", text: "No hay más cartas en la baraja", icon: "warning" }) : deck.pop());

    const valorCarta = (carta) => (isNaN(carta.substring(0, carta.length - 1)) ? (carta.substring(0, carta.length - 1) === 'A') ? 11 : 10 : carta.substring(0, carta.length - 1) * 1);

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntajes[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/${carta}.png`;
        imgCarta.classList.add('w-36', 'relative', '-ml-24', 'mr-5', 'left-24', 'duration-150', 'hover:-translate-y-4', 'hover:cursor-grab');

        divCartasJugadores[turno].append(imgCarta);
    };

    const validarGanador = (turno) => {

        const [ puntosMinimos ] = puntosJugadores;

        (turno === 0) ? (puntosMinimos > 21) ? (Swal.fire({ title: "Perdiste :(", text: "Lo siento, mejor suerte para la próxima", icon: "error" }), botonPedir.disabled = true, botonDetener.disabled = true, turnoComputadora(puntosMinimos)) : (puntosMinimos === 21) && (Swal.fire({ title: "Ganaste!", text: "Felicidades, me alegro de que en esta si hayas tenido suerte! :D", icon: "success" }), botonPedir.disabled = true, botonDetener.disabled = true, turnoComputadora(puntosMinimos)) : (turno === puntosJugadores.length - 1) && (puntosJugadores[puntosJugadores.length - 1] === puntosMinimos) ? Swal.fire({ title: "Empate", text: "Nadie gana, ambos tienen los mismos puntos", icon: "warning" }) : (puntosJugadores[puntosJugadores.length - 1] > 21) ? Swal.fire({ title: "Ganaste :D", text: "La computadora se ha pasado", icon: "success" }) : (puntosJugadores[puntosJugadores.length - 1] === 21 || puntosJugadores[puntosJugadores.length - 1] > puntosMinimos) && Swal.fire({ title: "Ganó la computadora :(", text: "Lo siento, mejor suerte para la próxima", icon: "error" });
    };

    const turnoComputadora = (puntosMinimos) => {

        do {
            const carta = pedirCarta();

            acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

            if (puntosMinimos > 21) { break };

        } while ((puntosJugadores[puntosJugadores.length - 1] < puntosMinimos) && (puntosMinimos <= 21));

        validarGanador(puntosJugadores.length - 1);

    }

    botonPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        validarGanador(0);

    })

    botonDetener.addEventListener('click', () => {
        botonPedir.disabled = true;
        botonDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });

    botonNuevo.addEventListener('click', () => history.go(0), inicializarJuego());

})();