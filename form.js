var nombre = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");

var form = document.getElementById("form-registro");
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var mensajeerror = [];

    if(usuario.value === null || usuario.value === ''){
        mensajeerror.push('ingresa tu usuario');
    }

    if(contraseña.value === null || contraseña.value === ''){
        mensajeerror.push('ingresa tu contraseña');
   }

    error.innerHTML = mensajeerror.join(', ');
    
});