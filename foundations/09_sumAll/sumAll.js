const sumAll = function(num1, num2) {
    if (num1 <= num2) {
        let i = 0
        let contador = 0
        while (i < num2) {
            if (i < num1) {
                contador = num1
                i = num1
            }
            else {
                contador = contador + i
                i = i + 1
            }
        }
        return contador
    }
    else {
        let i = 0
        let contador = 0
        while (i <= num1) {
            if (i < num2) {
                contador = num2
                i = num2
            }
            else {
                contador = contador + i
                i = i + 1
            }
        }
        return contador
    }
};

// Do not edit below this line
module.exports = sumAll;



// contador 0
// iterador 0

// contador    1
// iterador    1

// contador    3
// iterador    2

// contador    6
// iterador    3

// contador    10
// iterador    4
