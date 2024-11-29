
let cedula = document.getElementById('idCedula');
let nombre = document.getElementById('idNombre');
let apellido = document.getElementById('idApellido');

let btnGuardar = document.getElementById('btnGuardar');
let btnConsultar = document.getElementById('btnConsultar');

let mensaje = document.getElementById('mensaje');
const json = document.getElementById('json');
mensaje.style.display = 'Datos incompletos';


function guardar(){
    let profesor = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido
    };

    if(profesor.cedula == '' || profesor.nombre == '' || profesor.apellido == ''){
        mensaje.style.display = 'Datos Incompletos';
        return;
    }

    else{
        let profesor = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido
        };
        
        json.innerText = JSON.stringify(profesor);
    }

}

function mostrar(){
    let cedulaProfesor = cedula.value;
    let profesor = JSON.parse(localStorage.getItem(cedulaProfesor));
    if(profesor != null){
        
    }else{
        cedula.innerText = profesor.cedula;
        nombre.innerText = profesor.nombre
        apellido.innerText = profesor.apellido;
    }
}