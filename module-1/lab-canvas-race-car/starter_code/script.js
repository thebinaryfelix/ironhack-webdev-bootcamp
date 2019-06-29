window.onload = () => {
  const canvas = new Canvas('main-road');
  const startGame = () => {
    if (!canvas.started) {
      canvas.start();
    }
    document.onkeydown = (event) => {
      event.preventDefault();
      canvas.car.move(event.keyCode);
    };
  };

  document.getElementById('start-button').addEventListener('click', () => {
    startGame();
  });
};
