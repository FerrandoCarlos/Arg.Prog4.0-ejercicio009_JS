const show = document.getElementById("msg");
const button = document.getElementById("btn");

button.addEventListener("click",
    function validar() {
        let num = document.getElementById("number").value;
        //console.log(num);
        if (num >= 10) {
            document.getElementById("parrafo").style.fontSize = num + "px";
            show.innerHTML = `<p class="exito">El estilo de la fuente fue cambiado con éxito!!!</p>`; 
        } else {
            show.innerHTML = `<p class="error">El estilo de la fuente no pudo ser cambiado!!!</p>`;    
        }
    }

);