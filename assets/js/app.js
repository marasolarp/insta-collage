//funcion para validar login
function login(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("password").value;

	var btnSesion = document.getElementsById("sing")[0];


	if(user == ""){
		var errorU = document.createElement("span")
		errorU.classList.add("error-u")
		var textU = document.createTextNode("Ingrese Usuario")

		var userbien = document.getElementsByClassName("form-group")[0];
		errorU.appendChild(textU)
		userbien.appendChild(errorU)
	
	}else{
		window.location.href="index.html"
	}

	if((pass == "") || (pass == 123456) || (pass.length<5) || (pass.length>7)){
		var errorP = document.createElement("span")
		errorP.classList.add("error-p")
		var textP = document.createTextNode("Ingrese Contraseña")

		var passbien = document.getElementsByClassName("form-group")[0];
		errorP.appendChild(textP)
		passbien.appendChild(errorP)

	}else{
		window.location.href="index.html"
	}
}


//  function para el drag and drop
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);//ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR 
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');//ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(id_foto));
}




