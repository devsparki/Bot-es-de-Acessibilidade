const body = document.body;
let tamanhoFonte = 16;

// Botões
const contrasteBtn = document.getElementById('contraste');
const aumentarBtn = document.getElementById('aumentarFonte');
const diminuirBtn = document.getElementById('diminuirFonte');
const resetarBtn = document.getElementById('resetar');
const modoLeituraBtn = document.getElementById('modoLeitura');
const linksSublinhadosBtn = document.getElementById('linksSublinhados');
const modoNoturnoBtn = document.getElementById('modoNoturno');
const lerTextoBtn = document.getElementById('lerTexto');
const desativarAnimacoesBtn = document.getElementById('desativarAnimacoes');

// Alto contraste
contrasteBtn.addEventListener('click', () => {
  body.classList.toggle('alto-contraste');
});

// Aumentar fonte
aumentarBtn.addEventListener('click', () => {
  tamanhoFonte += 2;
  body.style.fontSize = `${tamanhoFonte}px`;
});

// Diminuir fonte
diminuirBtn.addEventListener('click', () => {
  if(tamanhoFonte > 10){
    tamanhoFonte -= 2;
    body.style.fontSize = `${tamanhoFonte}px`;
  }
});

// Resetar
resetarBtn.addEventListener('click', () => {
  body.classList.remove('alto-contraste', 'leitura-facil', 'links-sublinhados', 'modo-noturno', 'sem-animacoes');
  tamanhoFonte = 16;
  body.style.fontSize = `${tamanhoFonte}px`;
});

// Modo leitura fácil
modoLeituraBtn.addEventListener('click', () => {
  body.classList.toggle('leitura-facil');
});

// Links sublinhados
linksSublinhadosBtn.addEventListener('click', () => {
  body.classList.toggle('links-sublinhados');
});

// Modo noturno
modoNoturnoBtn.addEventListener('click', () => {
  body.classList.toggle('modo-noturno');
});

// Desativar animações
desativarAnimacoesBtn.addEventListener('click', () => {
  body.classList.toggle('sem-animacoes');
});

// Ler texto em voz alta
lerTextoBtn.addEventListener('click', () => {
  const mainTexto = document.querySelector('main').innerText;
  const speech = new SpeechSynthesisUtterance(mainTexto);
  speech.lang = 'pt-BR';
  window.speechSynthesis.speak(speech);
});
