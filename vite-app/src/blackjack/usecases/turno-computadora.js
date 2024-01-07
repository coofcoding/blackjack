import { pedirCarta, crearCarta, acumularPuntos, validarGanador } from "./";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntajes, divCartasJugadores, botonPedir, botonDetener) => {

    do {
        const carta = pedirCarta( deck );

        acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntajes);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

        if (puntosMinimos > 21) { break };

    } while ((puntosJugadores[puntosJugadores.length - 1] < puntosMinimos) && (puntosMinimos <= 21));

    validarGanador(puntosJugadores.length - 1, puntosJugadores, botonPedir, botonDetener, deck, puntajes, divCartasJugadores);

}