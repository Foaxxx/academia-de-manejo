var ciudad = document.getElementById('ciudad');
ciudad.addEventListener("click", function mostrar_dialog1(){
    var dialog = document.getElementById('dialog');
    dialog.show()

})

var inicio = document.getElementById('inicio');
inicio.addEventListener('click', function recargar(){
    var res = confirm("Todos los cambios realizados no serán guardados ¿Desea continuar?");
    if(res){
        location.reload
    }
})