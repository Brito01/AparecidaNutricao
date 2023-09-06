var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparencida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++ ){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
   }

if (alturaEhValido && pesoEhValido) {
    var imc = peso / (altura * altura) ;
tdImc.textContent = imc.toFixed(2);
   }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("clink",function(){
    console.log("oi, cliente no botão");
});

titulo.addEventListener("click",function() { 

});

//