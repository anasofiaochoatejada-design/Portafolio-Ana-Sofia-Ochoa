// no entiendo muy bien java entonces lo utilice para hacer las interacciones simples 
// me ayude con estos tutoriales y con lo que habiamos visto en clase de opacity: https://www.youtube.com/watch?v=FQtjI1PC5Z0 y https://www.youtube.com/watch?v=cbUUqvRqisk


let boton = document.getElementById("botonNextProject");

let paginaActual = window.location.pathname;

if (boton) {

    boton.onclick = function () {

        if (paginaActual.includes("vase.html")) {
            window.location.href = "bench.html";
        }
        else if (paginaActual.includes("bench.html")) {
            window.location.href = "kidsbench.html";
        }
        else if (paginaActual.includes("kidsbench.html")) {
            window.location.href = "perfume.html";
        }
        else if (paginaActual.includes("perfume.html")) {
            window.location.href = "work.html";
        }

    };

}


