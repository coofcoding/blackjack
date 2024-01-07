
/**
 * Obtener el valor de la carta
 * @param {String} carta Almaceno la carta para obtener su valor
 * @returns {Number} Retorna el valor de la carta
 */
export const valorCarta = (carta) => (isNaN(carta.substring(0, carta.length - 1)) ? (carta.substring(0, carta.length - 1) === 'A') ? 11 : 10 : carta.substring(0, carta.length - 1) * 1);
