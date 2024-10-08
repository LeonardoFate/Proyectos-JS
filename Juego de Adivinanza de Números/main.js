let randomNumber; // Almacena el número aleatorio generado
let attempts = 0; // Lleva el conteo de intentos

// Función para generar un número aleatorio entre 1 y 100
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Número generado: ${randomNumber}`); // Para ayudarte a ver el número en consola
}

// Función que verifica la adivinanza del usuario
function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  attempts++; // Incrementa el número de intentos

  const resultMessage = document.getElementById("resultMessage");

  // Comparación de la adivinanza con el número aleatorio
  if (userGuess === randomNumber) {
    resultMessage.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intento(s).`;
  } else if (userGuess > randomNumber) {
    resultMessage.textContent = "Demasiado alto. Intenta con un número más bajo.";
  } else {
    resultMessage.textContent = "Demasiado bajo. Intenta con un número más alto.";
  }
}

// Función para reiniciar el juego
function resetGame() {
  attempts = 0; // Reinicia el conteo de intentos
  generateRandomNumber(); // Genera un nuevo número aleatorio
  document.getElementById("guessInput").value = ""; // Limpia el campo de entrada
  document.getElementById("resultMessage").textContent = ""; // Limpia el mensaje de resultado
}

// Asignar eventos a los botones
document.getElementById("guessButton").addEventListener("click", checkGuess);
document.getElementById("resetButton").addEventListener("click", resetGame);

// Llama a la función para generar un número aleatorio al iniciar el juego
generateRandomNumber();
