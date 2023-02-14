var altura = 0;
var largura = 0;
var posicaoX = 0;
var posicaoY = 0;
var tempo = 50;
var duracao = 2000;

var recebido = window.location.search;

recebido = recebido.replace("?", "");

switch (recebido) {
  case "normal":
    duracao = 3000;
    break;
  case "dificil":
    duracao = 2000;
    break;
  case "extremo":
    duracao = 1000;
    break;
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();
var vidas = 1;
function posicaoRandomica() {
  ajustaTamanhoPalcoJogo();
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "fimdejogo.html";
    }
    document.getElementById("v" + vidas).src = "./img/coracao_vazio.png";
    vidas++;
  }
  var posicaoX = Math.random() * largura - 90;
  var posicaoY = Math.random() * altura - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;
  if (posicaoX < 50 && posicaoY < 50) {
    posicaoX = posicaoX < 50 ? 50 : posicaoX;
    posicaoY = posicaoY < 50 ? 50 : posicaoY;
  }

  var mosquito = document.createElement("img");
  mosquito.src = "./img/mosca.png";
  document.body.appendChild(mosquito);
  mosquito.className = "mosquito1";
  mosquito.id = "mosquito";
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.onclick = function () {
    this.remove();
  };
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2) < 1 ? "ladoB" : "ladoA";

  return classe;
}

function reset() {
  window.location.reload();
}

function iniciarJogo() {
  var nivel = document.getElementById("nivel").value;
  if (nivel === "") {
    alert("Escolhe um nível pelo amor de Deus!!!!");
    return false;
  }
  console.log(duracao);
  window.location.href = "app.html?" + nivel;
}
