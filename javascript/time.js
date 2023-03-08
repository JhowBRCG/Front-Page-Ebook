var expirationDate = localStorage.getItem("expirationDate");
if (!expirationDate) {
  // Se não há data de expiração no armazenamento local, defina uma nova data de expiração de 48 horas a partir do momento atual
  expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 48);
  localStorage.setItem("expirationDate", expirationDate);
} else {
  // Se houver uma data de expiração no armazenamento local, converta-a de volta para um objeto Date
  expirationDate = new Date(expirationDate);
}

// Atualizar o contador a cada segundo
var countdown = setInterval(function () {
  // Obter a data atual
  var now = new Date().getTime();

  // Calcular a diferença entre a data atual e a data de expiração
  var distance = expirationDate - now;

  // Calcular as horas, minutos e segundos restantes
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibir o contador no elemento HTML com o id "countdown"
  document.querySelector(".main-time").innerHTML =
    "Faltam " + hours + "h " + minutes + "m " + seconds + "s ";

  // Verificar se a contagem regressiva acabou
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".main-time").innerHTML = "EXPIRADO";
    localStorage.removeItem("expirationDate");
  }
}, 1000);
