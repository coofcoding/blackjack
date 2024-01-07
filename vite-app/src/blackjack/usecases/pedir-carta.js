import Swal from 'sweetalert2';

/**
 * Pedimos una carta y validamos si hay más cartas en el deck o no
 * @param {Array<String>} deck Arreglo de cartas
 * @returns {Object} Retorna una acción, o un modal o elimina la carta del deck
 */
export const pedirCarta = ( deck ) => (deck.length === 0 ? Swal.fire({ title: "Oh, oh!", text: "No hay más cartas en la baraja", icon: "warning" }) : deck.pop());
