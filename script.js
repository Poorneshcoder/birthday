function startBirthdayAnimation() {
    const clickButton = document.querySelector('.click-button');
    const scrollingText = document.querySelector('.scrolling-text');
    const birthdayText = document.getElementById('birthdayText');
    const messageText = document.getElementById('messageText');
    const card = document.querySelector('.card');
  
    clickButton.style.display = 'none';
    scrollingText.style.display = 'block';
    card.style.padding = '40px';
  
    typeWriterEffect("Happy Birthday!", birthdayText, () => {
        typeWriterEffect(" Satya Prasad!", birthdayText, () => {
          
      typeWriterEffect("Wishing you this year filled with joy and happiness!", messageText, () => {
        createFullScreenFireworks();
    });
      });
    });
  }
  
  function typeWriterEffect(text, element, callback) {
    let i = 0;
    const speed = 100; // Speed of typing in milliseconds
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        callback();
      }
    }
  
    type();
  }
  
  function createFullScreenFireworks() {
    const fullScreenFireworks = document.createElement('div');
    fullScreenFireworks.classList.add('full-screen-fireworks');
    document.body.appendChild(fullScreenFireworks);
  
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  
    for (let i = 0; i < 150; i++) {
      const spark = document.createElement('div');
      spark.classList.add('spark');
      spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      spark.style.left = Math.random() * window.innerWidth + 'px';
      spark.style.top = Math.random() * window.innerHeight + 'px';
      spark.style.animationDuration = Math.random() * 2 + 1 + 's';
      spark.style.animationDelay = Math.random() * 0.5 + 's';
      fullScreenFireworks.appendChild(spark);
    }
  
    // setTimeout(() => {
    //   fullScreenFireworks.remove();
    // }, 5000);
  }
  