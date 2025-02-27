// El principal objetivo de este desafío es fortalecer tus
//  habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.
//crear aplicacion que permita ingresar nombre de amigos y luego
//realizar sorteo aleatorio para determinar quien es el amigo secreto
//validar datos de entrada si intenta enviar datos vacios un alert que 
// se ingreesse un nobre valido 
//al hacer clic en sortear amigo la app debe escoger uno y mosrtrarlo en pantalla


let nombreParticipantes=[ ];

let registro="";




function agregarAmigo() {

       
            registro=document.getElementById("amigo").value;
        if (registro.trim() === "" ||  nombreParticipantes.includes(registro) ){   
          alert("no se aceptan campos vacios ni valores repetidos ");
            return;
          
    }    
      nombreParticipantes.push(registro);     
       
       

    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = registro;
    document.getElementById("listaAmigos").appendChild(nuevoLi);
    document.getElementById("amigo").value="";


   
    

}

 function sortearAmigo(){   
     document.getElementById("listaAmigos").innerHTML = " ";
     document.getElementById("resultado").innerHTML = " ";


         if (!Array.isArray(nombreParticipantes) || nombreParticipantes.length === 0) {
    alert("No hay participantes para sortear.");
    return;
     } 
    let ganador = Math.floor(Math.random() * nombreParticipantes.length);
   

   let nuevoLiGanador = document.createElement("li");
   nuevoLiGanador.textContent ="El ganador es: \n  "+ nombreParticipantes[ganador];
   document.getElementById("resultado").appendChild(nuevoLiGanador);

        }

 




