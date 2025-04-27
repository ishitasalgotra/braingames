const messages = [
    "Let's boost your brain! 🧠✨",
    "Ready to challenge yourself? 🚀",
    "One small click for you, one giant leap for your brain! 🌟",
    "Train your brain daily! 🎯",
    "Game on! 🎮"
  ];
  
  const gameButtons = document.querySelectorAll('.game-btn');
  
  gameButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      document.querySelector('p').textContent = messages[randomIndex];
    });
  
    button.addEventListener('mouseleave', () => {
      document.querySelector('p').textContent = "Boost your brain daily with fun mini games!";
    });
  });