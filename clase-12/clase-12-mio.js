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

$elementos.click(() => {
    console.log(this);
    console.log($(this).text());
})


// CHAINING (concatenación)


// se logra porque el método addClass, y el método css (y casi todos los métodos de jQuery) devuelven el mismo objeto sobre el que operan.
// ejemplo de implementación de chaining:


//Web APIs
//fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
/*$.ajax({
    method: "GET",
    url: 'https://api.ratesapi.io/api/latest',
    success: respuesta => {
        console.log("respuesta de la api", respuesta);
        $("#resultado").text(JSON.stringify(respuesta.date))
    }
    async: true;
})*/
/*
ac tualmente se usa mas fetch que ajax

*/
fetch('https://api.ratesapi.io/api/latest')
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        $("h1").text(`Los cambios del día ${respuestaJSON.date} en base a la moneda ${respuestaJSON.base}`)
        $("ul").html("")
        Object.keys(respuestaJSON.rates).forEach(moneda =>
            $('ul').append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`))
            );
    })
    .catch(error => console.error("falló", error))

console.log("esto pasa antes")
//usa promesas

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

//ejemplo de implementación de promesas
