var pares =0;
var nones= 1;
var jugador= nones, maquina;
if(jugador==='pares'){
    jugador =0;
    maquina= 1;
    
}
var jugadaJugador=7;
console.log(jugadaJugador);
var jugadaMaquina = Math.floor(Math.random()*11);
console.log(jugadaMaquina);
var resultado=(jugadaJugador+jugadaMaquina)%2;
console.log('Esto es el ' + resultado);
if (resultado ===jugador){
    console.log('Gana jugador')
}