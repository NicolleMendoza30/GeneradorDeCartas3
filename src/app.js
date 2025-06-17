import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  function generarCarta() {
  let valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "Q", "K", "A"]
  let indice = Math.floor(Math.random() * valor.length);
  let carta = `${valor[indice]} `
  let div = document.querySelector("#valor-carta");
  div.innerHTML = carta;

  let simbolos = ['♥', '♠', '♦', '♣'];
  let indice1 = Math.floor(Math.random() * simbolos.length);
  let cartaSimbolo = `${simbolos[indice1]}`;


  let div1 = document.querySelector("#top-left-heart-card");
  div1.innerHTML = cartaSimbolo

  let div2 = document.querySelector("#below-right-heart-card");
  div2.innerHTML = cartaSimbolo

  if (cartaSimbolo == '♥' || cartaSimbolo == '♦') {
    div1.classList.remove('violet')
    div2.classList.remove('violet')
    div1.classList.add('red')
    div2.classList.add('red')
  } else {
    div1.classList.remove('red')
    div2.classList.remove('red')
    div1.classList.add('violet')
    div2.classList.add('violet')
  }
}
  generarCarta()
  let boton = document.getElementById('generar-carta')
  boton.addEventListener('click', () => generarCarta())
  setInterval(() => generarCarta(), 10000)

};






