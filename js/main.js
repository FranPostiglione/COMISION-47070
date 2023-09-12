//VIDA TOTAL DE LOS JUGADORES
let playerhealth = 100;
let enemyhealth = 100; 

//HABILIDADES
let ataquepuño = 20;
let patadadefuego = 30;
let superpoder = 40;


//ATAQUE DEL RIVAL
function vidaenemigarestante0() {
    console.log('----Esperando ataque del rival----')
    console.log('0: Golpe de puño (20 pts de daño')
    console.log('1: Patada de fuego (30 pts de daño')
    console.log('2: Superpoder (40 pts de daño')
    alert('Esperando ataque enemigo')
    let ataquerival = console.log('El rival a elegido ' + Number(Math.round(Math.random() * 2)))
    console.log ('La vida del jugador es ' + Number(playerhealth - ataquepuño))
    //console.log ('La vida del jugador es ' + Number(playerhealth - patadadefuego))
    //console.log ('La vida del jugador es ' + Number(playerhealth - superpoder))
    switch(ataquerival) {
    case '0': 
        let ataque0 = Number(console.log('El rival ha elegido golpe de puño'));
        console.log ('La vida del jugador es ' + Number(playerhealth - ataquepuño))
        round2 (ataque0)    
    case '1':
        let ataque1 = Number(console.log('El rival ha elegido patada de fuego '));
        console.log ('La vida del jugador es ' + Number(playerhealth - patadadefuego))
        round2 (ataque1)   
    case '2':  
        let ataque2 = Number(console.log('El rival ha elegido superpoder '));
        console.log ('La vida del jugador es ' + Number(playerhealth - superpoder))
        round2 (ataque2)         
    }
    
}

//ELEGIR ATAQUE
function eligeunahabilidad (){
    console.log('0: Golpe de puño (20 pts de daño)');
    console.log('1: Patada de fuego (30 pts de daño)');
    console.log('2: Superpoder (40 pts de daño)');
    let habilidad = prompt ('Elige tu ataque');
    switch(habilidad) {
        case '0':
        let ataque0 = Number(console.log('Haz elegido golpe de puño'));
        //console.log (enemyhealth - ataquepuño)
        console.log ('La vida del oponente es' + Number(enemyhealth - ataquepuño))
        vidaenemigarestante0(ataque0)
        case '1':
        let ataque1 = Number(console.log('Haz elegido patada de fuego'))
        //console.log (enemyhealth - ataquepuño)
        console.log ('La vida del oponente es' + Number(enemyhealth - patadadefuego))
        vidaenemigarestante0(ataque1)
        case '2':
        let ataque2 = Number(console.log('Haz elegido superpoder'))
        //console.log (enemyhealth - ataquepuño)
        console.log ('La vida del oponente es' + Number(enemyhealth - superpoder))
        vidaenemigarestante0(ataque2)
        default: 
        alert ('Habilidad no permitida');
        eligeunahabilidad()
    }
}

//HABILIDADES: Golpe de puño(20 de daño), Patada de fuego(30 de daño), Superpoder (40de daño), Curación (40 puntos de sanacion)
function primerataque() {
    let listahabilidades = alert ('LISTA DE HABILIDADES: 0: Golpe de puño (20 pts de daño), 1: Patada de fuego (30 pts de daño), 2: Superpoder (40 pts de daño)');
    eligeunahabilidad(listahabilidades);
}

//HABILIDADES
function habilidades(valor){
    if(valor) {
    let habilidades= alert('Comencemos')
    primerataque(habilidades);
    } else {
        alert('El jugador no está listo para luchar');
}
    console.log(valor)
}

//ESTAS LISTO?
function estaslisto(){
    let jugadorlisto = confirm('¿Estas listo para luchar?');
    habilidades(jugadorlisto)
    }
    

//INSTRUCCIONES
function instrucciones(){
        let instrucciones = alert ('Instrucciones: El jugador que logre vencer con las habilidades al rival (que este quede en 0 (cero) de vida), ganará el juego')
        estaslisto()
    }

//VALIDAR CREDITO
function validarcredito(valor){
    if(valor) {
    let validarficha = alert ('El jugador ha ingresado correctamente');
    instrucciones(validarficha); 
    } else {
        alert('El jugador debe ingresar una ficha para poder jugar');
    }
    console.log(valor)   
}

//INGRESAR FICHA
function ingresarficha(valor){
    if(valor) {
        let ingresarficha = confirm('Ingresa una ficha para poder jugar');
        validarcredito(ingresarficha);
    } else {
        alert('El jugador no inició el juego');
    }
    console.log(valor)
    
}
iniciarjuego()
//INICIAR JUEGO
function iniciarjuego(valor){
    let iniciar = confirm('Desea iniciar el juego?');
    ingresarficha(iniciar);    
    console.log(valor)
}












//ESTABLECER ATAQUES 
