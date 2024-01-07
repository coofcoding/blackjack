import { valorCarta } from "./";

export const acumularPuntos = (carta, turno, puntosJugadores, puntajes) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntajes[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
};