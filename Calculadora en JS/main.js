function agregarValor(valor) {
  const resultado = document.getElementById("resultado");
  resultado.value += valor;
}

function limpiar() {
  const resultado = document.getElementById("resultado");
  resultado.value = "";
}

// function calcular() { forma corta y rapida
//     const resultado = document.getElementById('resultado');
//     try{
//         resultado.value = eval(resultado.value);
//     }catch (error){
//         resultado.value = 'Error;'
//     }
// }

//forma mas robusta
function calcular() {
    const resultado = document.getElementById('resultado');
    try {
        const value = resultado.value;
        const result = evaluarExpresion(value);
        resultado.value = result;
    } catch (error) {
        resultado.value = 'Error';
    }
}

function evaluarExpresion(exp) {
    const tokens = exp.match(/(\d+|\+|\-|\*|\/)/g); // Divide la expresión en números y operadores
    const numeros = [];
    const operadores = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            numeros.push(parseFloat(token)); // Almacena números
        } else {
            while (operadores.length && precedencia(operadores[operadores.length - 1]) >= precedencia(token)) {
                const b = numeros.pop();
                const a = numeros.pop();
                const operador = operadores.pop();
                const resultado = operar(a, b, operador);
                numeros.push(resultado);
            }
            operadores.push(token); // Almacena operadores
        }
    }

    while (operadores.length) {
        const b = numeros.pop();
        const a = numeros.pop();
        const operador = operadores.pop();
        const resultado = operar(a, b, operador);
        numeros.push(resultado);
    }

    return numeros[0]; // Devuelve el resultado final
}

function operar(a, b, operador) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Operador desconocido');
    }
}

function precedencia(operador) {
    switch (operador) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}
