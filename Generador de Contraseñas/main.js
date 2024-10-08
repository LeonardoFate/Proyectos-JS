// Caracteres que se usarán para formar la contraseña
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

//creamos funcion para generar la contraseña

function generatePass (length, useNumbers, useUppercase, useSymbols) {
        let charPool = lowerCaseChars;

        //creamos una condicional para añadir caracteres adicionales segun las opciones
        if(useNumbers){
            charPool += numberChars;
        }
        if(useUppercase){
            charPool += upperCaseChars; 
        }
        if (useSymbols) {
            charPool += symbolChars; 
        }

        let password = ""
    //bucle para generar contraseña
    for (let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random()* charPool.length);
        password += charPool [randomIndex];
    }

    return password;
  }

  //funcion para recoger los valores de los campos de entrada y mostrar la contraseña

  function generate() {
    const length = document.getElementById('length').value;
    const useNumbers = document.getElementById("includeNumbers").checked;
    const useUpperCase = document.getElementById("includeUpperCase").checked;
    const useSymbols = document.getElementById("includeSymbols").checked;

    const password = generatePass(parseInt(length), useNumbers, useUpperCase, useSymbols);
    document.getElementById('result').innerHTML = password;
    }