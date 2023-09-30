
//INICIAR JUEGO

    let iniciar = alert('Bienvenido');
       

//INSTRUCCIONES

alert ('Instrucciones: El jugador que logre vencer con las habilidades al rival, ganará el juego')
    
//ESTAS LISTO?
alert('Preparados para luchar!');
    

//HABILIDADES
alert('Comencemos')
    
  


alert('LISTA DE HABILIDADES: 0: Tierra le gana a agua, 1: Fuego le gana a tierra, 2: Agua le gana a Fuego');
    console.log('0: Golpe de tierra(le gana a agua), 1: Golpe de fuego(le gana a tierra), 2: Golpe de Agua(le gana a fuego)');
    


//ELEGIR ATAQUE
let player = prompt ('Elige tu ataque');

if (player == 0) {
    console.log('Elegiste tierra')
    alert ('Elegiste tierra')
} else if (player == 1) {
    console.log('Elegiste Fuego')
    alert('Elegiste Fuego')
} else if (player == 2) {
    console.log('Elegiste Agua')
    alert ('Elegiste Agua')

}

alert ('Turno del enemigo')
//ATAQUE ENEMIGO
let enemy =Math.round(Math.random() * 2)
    if (enemy == 0) {
        console.log('El enemigo eligió tierra')
        alert ('El enemigo eligió tierra')
    } else if (enemy == 1) {
        console.log('El enemigo eligió Fuego ')
        alert('El enemigo eligió Fuego ')
    } else if (enemy == 2) {
        console.log('El enemigo eligió agua')
        alert ('El enemigo eligió agua')
    }

//RESULTADO
console.log('Resultado')
alert('Resultado')

if (player == enemy) {
    alert('Ha sido un empate')
    console.log('Ha sido un empate')
} else if(player == 0 && enemy == 2){
    alert('Has ganado')
    console.log('Has ganado')
} else if(player == 1 && enemy == 0) {
    alert('Has ganado')
    console.log('Has ganado')
} else if(player == 2 && enemy == 1) {
    alert('Has ganado')
    console.log('Has ganado')
} else {
    alert('Has perdido el juego')
    console.log('Has perdido el juego')
}














    



















//ESTABLECER ATAQUES 
