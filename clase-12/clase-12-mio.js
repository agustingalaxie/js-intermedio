// npm i --save-dev @types/jquery
// sólo lo entiende el IDE, porque es un comentario-- no tiene efecto alguno en el sitio web.
/// <reference types="jquery" />

// const $header = document.querySelector('h1');
// var $header = document.getElementsByTagName('h1')[0];
const $header = $('h1');
$header.text("Clase 12");
$header.addClass("rojo");


// https://developer.mozilla.org/es/docs/Web/API/Console/tabla


const $elementos = $('#lista li');
//elementos.click(() => {console.log($elemento)})


/*
$elementos.forEach(($elemento) => {
    $elemento.addEventListener('click', function(){
        console.log(this.textContent);
    })
});

*/

//algo para considerar con las arrow functions (no tienen this propio!)

$elementos.click(()=>{
    console.log(this);
    console.log($(this).text());
})


// CHAINING (concatenación)


// se logra porque el método addClass, y el método css (y casi todos los métodos de jQuery) devuelven el mismo objeto sobre el que operan.
// ejemplo de implementación de chaining:


//Web APIs
//fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//usa promesas

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

//ejemplo de implementación de promesas
