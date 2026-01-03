// Загрузка ИИ
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
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

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.transition = "opacity 1.5s ease";
        setTimeout(() => {
          loader.style.display = "none";
          document.body.style.overflow = "auto";
        }, 1500);
      }, 300);
    }
  }, 400);

  setTimeout(() => {
    if (progress < 100) {
      progress = 100;
      progressFill.style.width = "100%";
      status.textContent = "Форсированная активация...";
      statusPercent.textContent = "100%";
    }
  }, 7000);
});

// Пульс
setInterval(() => {
  const pulse = 70 + Math.sin(Date.now() / 1000) * 5;
  document.getElementById('pulse').textContent = Math.round(pulse);
}, 800);

// Сбой ИИ
setInterval(() => {
  const glitch = document.createElement('div');
  glitch.classList.add('glitch-alert');
  glitch.textContent = '⚠️ СБОЙ: ЭМОЦИОНАЛЬНЫЙ КОНТУР НАРУШЕН';
  document.body.appendChild(glitch);
  setTimeout(() => glitch.remove(), 1200);
}, 30000);

// Режим гитары
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey && (e.key === 'm' || e.key === 'M')) {
    document.body.classList.add('guitar-mode');
    alert('🎸 РЕЖИМ ГИТАРЫ АКТИВИРОВАН');
    setTimeout(() => {
      document.body.classList.remove('guitar-mode');
    }, 5000);
  }
});

// Загрузка трека
document.querySelectorAll('audio').forEach(audio => {
  audio.addEventListener('play', function () {
    const trackName = this.closest('.track').querySelector('h3').textContent;
    showLoaderTrack(trackName);
  });
});

function showLoaderTrack(name) {
  const loader = document.createElement('div');
  loader.classList.add('track-loader');
  loader.innerHTML = `🔊 ИНИЦИАЛИЗАЦИЯ ТРЕКА:<br><strong>${name}</strong>`;
  document.body.appendChild(loader);
  setTimeout(() => loader.remove(), 2500);
}

// Форма
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Сообщение отправлено в центр управления ИИ.");
  this.reset();
});
