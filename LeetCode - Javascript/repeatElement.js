//desenvolva uma função que receba 2 paramentros, o primeiro um elemento para repetir e o segundo p número de vezes que vai repetir.
//garanta que o indicador para repetir seja um número e que não seja negativo.

let isnumber = number => typeof(number) === 'number' ?  number : 'Você não informou um número valido';

let elementRepeat = (element, numero) => {
    let number = isnumber(numero);

    for(let i = 1; i <= number; i++){
        console.log(element + i);
    }
}

elementRepeat('Alexandre', 8);