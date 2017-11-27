//pantalla inicio no jugar
document.getElementById('no').onclick=function(){
 document.getElementById('inicio').style.display='none';
 document.getElementById('negativo').style.display='block';
}
//fin pantalla inicio

//pantalla aceptar juego
document.getElementById('si').onclick=function(){
document.getElementById('positivo').style.display='block';
 document.getElementById('inicio').style.display='none';
}
//fin pantalla aceptar juego

//pantalla pares o nones
document.getElementById('jugador').onclick=function(){
    document.getElementById('numero').style.display='block';
 document.getElementById('positivo').style.display='none';
   
}

//fin pantalla

//pantalla escoge maquina
document.getElementById('maquina').onclick=function(){
    document.getElementById('numero').style.display='none';
    document.getElementById('evaluacion').style.display='block';
     jugar();
}
//fin pantalla


//animacion nubes
document.getElementById('turnoMaquina').onclick=function disparar(){
    document.getElementById('nube1').style.display='block';
    window.setTimeout(apareceNube2,1000);
} 
function apareceNube2(){
    document.getElementById('nube1').style.display='block';
    document.getElementById('nube2').style.display='block';
    window.setTimeout(apareceNube3,1000);
}
function apareceNube3(){
      document.getElementById('nube1').style.display='block';
   document.getElementById('nube2').style.display='block'; 
    document.getElementById('nube3').style.display='block';
    window.setTimeout(apareceNube4,1000);
}
function apareceNube4(){
     document.getElementById('nube1').style.display='block';
   document.getElementById('nube2').style.display='block';
    document.getElementById('nube3').style.display='block';
    document.getElementById('nube4').style.display='block';
    window.setTimeout(apareceNube5,1000);
}
function apareceNube5(){
      document.getElementById('nube1').style.display='block';
   document.getElementById('nube2').style.display='block';
    document.getElementById('nube3').style.display='block';
    document.getElementById('nube4').style.display='block';
    document.getElementById('nube5').style.display='block';
    window.setTimeout(apareceResultados,1000);
    
}
function apareceResultados(){
     document.getElementById('evaluacion').style.display='none';
    document.getElementById('resultado').style.display='block';
    
}

//fin pantalla resultado
function jugar(){
    
    var par = document.getElementById('pares');
        var impar = document.getElementById('nones');
   if(par.checked){
      var jugada = par.value;
       var maquina =impar.value;
   
   }
    if(impar.checked){
      var jugada = impar.value;
       var maquina =par.value;
   
   }
    console.log(jugada);
    console.log(maquina);
    
   var numeroElegido= document.getElementById('numeroElegido').value;
     console.log(numeroElegido);
   var numMaquina=Math.floor(Math.random()*11);
   
    var suma= Number(numeroElegido) + Number(numMaquina);
   console.log(suma);
    document.getElementById('resultadoJ').innerHTML='Jugador elige ' + numeroElegido;
    document.getElementById('resultadoM').innerHTML='Maquina elige ' + numMaquina;
    if(suma%2===0){
        var resultados='pares';
    }
    if(suma%2===1){
        var resultados='nones';
    }
     if(resultados===jugada){
         document.getElementById('ganador').style.display='block';
         document.getElementById('perdedor').style.display
         ='none';
     }else{
         document.getElementById('perdedor').style.display='block';
         document.getElementById('ganador').style.display='none';
     }
}


    