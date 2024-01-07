import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const createDeck = ( tipos, especiales ) => {

    let deck = [];

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