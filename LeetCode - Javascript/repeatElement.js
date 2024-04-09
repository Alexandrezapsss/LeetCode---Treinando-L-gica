//desenvolva uma função que receba 2 paramentros, o primeiro um elemento para repetir e o segundo p número de vezes que vai repetir.
//garanta que o indicador para repetir seja um número e que não seja negativo.

let isnumber = number => typeof(number) === 'number' ?  number : false; // vou transformar aqui ou me retorna um booleano ou o numero

let verica = num => num === false ? console.log('Voce não informou um numero') : num;

let elementRepeat = (element, numero) => {
    let number = isnumber(numero);
    verica(number);
    for(let i = 1; i <= number; i++){
        console.log(element + i);
    }
}

elementRepeat('Alexandre', 7); // caso o valor for um numero vai me reotrnar as repetições
elementRepeat('Beatriz', 'batata não é uma fruta'); // vai me retornar a advertencia