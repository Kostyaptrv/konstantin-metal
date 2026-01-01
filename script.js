// Эмуляция процесса загрузки ИИ
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const loaderText = document.getElementById("loader-text");
  const progressFill = document.getElementById("progress");
  const status = document.getElementById("status");
  const statusPercent = document.getElementById("status-percent");

  const messages = [
    "Загрузка ядра...",
    "Инициализация голосового модуля...",
    "Сборка стиля: хэви-метал...",
    "Генерация эмоционального профиля...",
    "Подключение к нейросети...",
    "Запуск Константин-ИИ...",
  ];

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;

    progressFill.style.width = progress + "%";
    statusPercent.textContent = Math.round(progress) + "%";

    const msgIndex = Math.floor((progress / 100) * messages.length);
    status.textContent = messages[msgIndex] || "Готово...";
    statusPercent.textContent = progress < 100 ? Math.round(progress) + "%" : "100%";

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.transition = "opacity 1.5s ease";
        setTimeout(() => {
          loader.style.display = "none";
          document.body.style.overflow = "auto"; // Разрешаем скролл
        }, 1500);
      }, 300);
    }
  }, 400);

  // На случай, если DOM загрузился медленно
  setTimeout(() => {
    if (progress < 100) {
      progress = 100;
      progressFill.style.width = "100%";
      status.textContent = "Форсированная активация...";
      statusPercent.textContent = "100%";
    }
  }, 7000);
});

// Форма обратной связи
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Сообщение отправлено в центр управления ИИ.");
  this.reset();
});

