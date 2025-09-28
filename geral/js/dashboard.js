document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.bt-nav');
  if (nav) {
    // 1. Adiciona um "listener" de clique na área do menu de navegação
    nav.addEventListener('click', (event) => {
      // Verifica se o elemento clicado é realmente um botão (ou <a>)
      if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
        
        // 2. Remove a classe de todos os outros botões
        const buttons = nav.querySelectorAll('button, a'); // Ajuste o seletor se necessário
        buttons.forEach(btn => {
          btn.classList.remove('active-button');
        });

        // 3. Adiciona a classe no botão clicado
        event.target.classList.add('active-button');
      }
    });
  }
});

  // Função para iniciar ou pausar o timer
  function startTimer() {
    if (startButton.textContent === 'Iniciar') {
      startButton.textContent = 'Pausar';
      
      const startTime = Date.now();
      timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        remainingTime = Math.max(0, initialTime - elapsed);

        timerDisplay.textContent = formatTime(remainingTime);

        // Se o tempo chegar a zero, para o timer e incrementa o contador
        if (remainingTime === 0) {
          clearInterval(timerInterval);
          startButton.textContent = 'Iniciar';
          alert('Tempo esgotado!');

          // Incrementa o contador de resets e atualiza o display
          resetCount++;
          resetCountSpan.textContent = resetCount;
        }
      }, 1000);
      
    } else {
      startButton.textContent = 'Iniciar';
      clearInterval(timerInterval);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const resetButton = document.getElementById('resetButton');
  const timerDisplay = document.querySelector('.timer-display');
  const resetCountSpan = document.getElementById('resetCount'); 

  // URL do arquivo de som. Substitua por sua própria URL!
 const sound = new Audio('https://www.soundjay.com/button/button-1.mp3');

  // Tempo inicial em milissegundos (25 minutos)
  const initialTime = 1 * 60 * 1000;
  let remainingTime = initialTime;
  let timerInterval;
  let resetCount = 0;

  // Função para formatar o tempo em MM:SS
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  // Função para iniciar ou pausar o timer
  function startTimer() {
    if (startButton.textContent === 'Iniciar') {
      startButton.textContent = 'Pausar';
      
      timerInterval = setInterval(() => {
        remainingTime -= 1000;

        if (remainingTime <= 0) {
          clearInterval(timerInterval);
          startButton.textContent = 'Iniciar';
          remainingTime = 0;
          timerDisplay.textContent = formatTime(remainingTime);
          
          // Toca o som de aviso!
          sound.play();

          alert('Tempo esgotado!');

          resetCount++;
          resetCountSpan.textContent = resetCount;
        } else {
          timerDisplay.textContent = formatTime(remainingTime);
        }
      }, 1000);
      
    } else {
      startButton.textContent = 'Iniciar';
      clearInterval(timerInterval);
    }
  }

  // Função para resetar o timer
  function resetTimer() {
    clearInterval(timerInterval);
    startButton.textContent = 'Iniciar';
    remainingTime = initialTime;
    timerDisplay.textContent = formatTime(remainingTime);
  }

  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);

  timerDisplay.textContent = formatTime(initialTime);
});