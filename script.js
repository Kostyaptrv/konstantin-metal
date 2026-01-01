document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Сообщение отправлено в админку! (в реальности — будет на сервере)");
  this.reset();
});