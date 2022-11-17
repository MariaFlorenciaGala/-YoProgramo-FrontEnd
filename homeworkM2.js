/*const deportista = {
    nombre: 'Messi',
    champion: 4,
};
//PARA PASARLO A JSON
let stringify = JSON.stringify(deportista)
console.log(stringify)
//stringifear es pasar a string

//para volver a  hacerlo objeto usamos:
//stringify = 
console.log(JSON.parse(stringify))

*/
console.log('ANDA')

//PARA LLAMADAS A LAS API USAMOS.:
//fetch es buscar ---OJOOO LA URL COMPLETAAAAA
fetch('http://127.0.0.1:5500/Argentina%20Programa/%23YOPROGRAMO/Modulo%202/pasajeros.json')
//despues que agarre esa respuesta y que esa respuesta la pase a formato JSON
    .then((res) => res.json())

// y despues que agarre esa data y  nos la muestre (por defecto se pone asi) por consola
    .then((data) => console.log(data))

