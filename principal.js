var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparencida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


if(peso < 0 > 1000){
    console.log("Peso inválido");
}



var imc = peso / (altura * altura) ;
tdImc.textContent = imc;