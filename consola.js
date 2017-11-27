var jugador, maquina, pares, nones, numJugador, numMaquina, suma, resultado;

pares = 0;
nones = 1;

if(pares){jugador = "pares";
maquina = "nones"}else{
jugador = "nones";
maquina = "pares"
};

console.log("Jugador elige " + jugador);
console.log("Maquina elige " + maquina);

numJugador = 7;
numMaquina = Math.floor(Math.random()*11);

console.log(numJugador);
console.log(numMaquina);

suma = numJugador + numMaquina;

console.log(suma);

if(suma%2 === 0){resultado = "pares"}
if(suma%2 === 1){resultado = "nones"};

console.log(resultado);

function juego(){
if(resultado === "pares" && resultado === jugador){
return "Han salido pares y has ganado!!"};
if(resultado === "pares" && resultado !==jugador){
return "Han salido pares y has perdido!!"};

if(resultado === "nones" && resultado === jugador){
return "Han salido nones y has ganado!!"};
if(resultado === "nones" && resultado !==jugador){
return "Han salido nones y has perdido!!"};
};

//console.log(juego());
       