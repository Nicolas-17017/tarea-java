
let nombre = "Lionel Messi";
let equipoActual = "Inter Miami";
let edad = 37;
let golesMarcados = 836;
let partidosJugados = 1065;

const pais = "Argentina";
const apodo = "La Pulga";
const posicion = "Delantero";
const balonesDeOro = 8;
const copasDelMundo = 1;


const informacion = () => "Soy Lionel Messi y soy el mejor jugador de la historia del futbol";
console.log(informacion());


const anunciarEquipo = (equipo) => "Messi juega en el ${equipo}";
console.log(anunciarEquipo('Inter Miami'));


const promedioGoles = (goles, partidos) => goles / partidos;
console.log("Promedio de goles de Messi: ${promedioGoles(836, 1065)}");


const verificarCampeonMundial = () => {
    if (copasDelMundo > 0) {
        return "Messi es campeón del mundo";
    } else {
        return "Messi no ha ganado la Copa del Mundo";
    }
};
console.log(verificarCampeonMundial());

const balonesDeOroMensaje = (cantidad) => {
    switch(cantidad) {
        case 8:
            return "Messi ha ganado 8 balones de oro";
        case 6:
            return "Messi ha ganado 6 balones de oro";
        default:
            return "Messi ha ganado muchos balones de oro";
    }
};
console.log(balonesDeOroMensaje());



const detalleGolesPorPartido = (goles, partidos) => {
    for (let i = 1; i <= partidos; i++) {
        console.log(`Partido ${i}: Messi ha marcado ${Math.floor(goles / partidos)} goles`);
    }
};
detalleGolesPorPartido(836,100);



