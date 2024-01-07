import Swal from 'sweetalert2';
import { turnoComputadora } from './';

export const validarGanador = (turno, puntosJugadores, botonPedir, botonDetener, deck, puntajes, divCartasJugadores) => {

    const [puntosMinimos] = puntosJugadores;

    (turno === 0) ? (puntosMinimos > 21) ? (Swal.fire({ title: "Perdiste :(", text: "Lo siento, mejor suerte para la próxima", icon: "error" }), botonPedir.disabled = true, botonDetener.disabled = true, turnoComputadora(puntosMinimos, deck, puntosJugadores, puntajes, divCartasJugadores)) : (puntosMinimos === 21) && (Swal.fire({ title: "Ganaste!", text: "Felicidades, me alegro de que en esta si hayas tenido suerte! :D", icon: "success" }), botonPedir.disabled = true, botonDetener.disabled = true, turnoComputadora(puntosMinimos)) : (turno === puntosJugadores.length - 1) && (puntosJugadores[puntosJugadores.length - 1] === puntosMinimos) ? Swal.fire({ title: "Empate", text: "Nadie gana, ambos tienen los mismos puntos", icon: "warning" }) : (puntosJugadores[puntosJugadores.length - 1] > 21) ? Swal.fire({ title: "Ganaste :D", text: "La computadora se ha pasado", icon: "success" }) : (puntosJugadores[puntosJugadores.length - 1] === 21 || puntosJugadores[puntosJugadores.length - 1] > puntosMinimos) && Swal.fire({ title: "Ganó la computadora :(", text: "Lo siento, mejor suerte para la próxima", icon: "error" });

    return puntosMinimos;
};