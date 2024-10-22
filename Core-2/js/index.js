
//Cambiar color de like al pasar cursor
const boton = document.querySelector(".megusta");

//Contador de likes 1 
var contador = 0;
var contadorlike = document.querySelector(".likes");

boton.addEventListener("click", function(){
    contador++;
    contadorlike.innerText = contador + " "+ "Like(s)";
    console.log("Publicacion 1 tiene" + " " + contador + " " + "likes");
    
})
//Contador de likes 2
const boton1 = document.querySelector(".megusta1");

var contador1 = 0;
var contadorlike1 = document.querySelector(".likes1");

boton1.addEventListener("click", function(){
    contador1++;
    contadorlike1.innerText = contador1 + " "+ "Like(s)";
    console.log("Publicacion 2 tiene" + " " + contador1 + " " + "likes");
})

//Contador de likes 3
const boton2 = document.querySelector(".megusta2");

var contador2 = 0;
var contadorlike2 = document.querySelector(".likes2");

boton2.addEventListener("click", function(){
    contador2++;
    contadorlike2.innerText = contador2 + " "+ "Like(s)";
    console.log("Publicacion 3 tiene" + " " + contador2 + " " + "likes");
})
//Contador de likes 3
const boton3 = document.querySelector(".megusta3");

var contador3 = 0;
var contadorlike3 = document.querySelector(".likes3");

boton3.addEventListener("click", function(){
    contador3++;
    contadorlike3.innerText = contador3 + " "+ "Like(s)";
    console.log("Publicacion 4 tiene" + " " + contador3 + " " + "likes");
})


