export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('w-36', 'relative', '-ml-24', 'mr-5', 'left-24', 'duration-150', 'hover:-translate-y-4', 'hover:cursor-grab');

    divCartasJugadores[turno].append(imgCarta);
};