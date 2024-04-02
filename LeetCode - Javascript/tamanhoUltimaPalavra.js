//Exercicio de lógica de npivel fácil - pegar a ultima palavra de uma frase(String) e retornar o tamanho dela "oi" = 2

let lenghtOfLastWord = (s) => {
    //para a resolução precisamos retorna o numero de caracteres ou seja criar uma variavel vazia
    let tamanho = 0;
    //agora temos que pegar a frase e já posicionar a leitura dela na ultma palavra
    let indiceFrase = s.length - 1; //posicionar a leitura na ultima palavra dica pense na frase como a posição de um indice no array
    //vamos aplicar um loop para ir incrementando o valor no tamanho 
    while(indiceFrase >= 0 && s[indiceFrase] !== " "){
        //aqui incrementamos o tamanho até achar o espaço que separa a palavra
        tamanho += 1;
        //como é uma estrutura de loop temos que fazer o controle dela e vamos decrementando pois estamos pegando de tras para frente
        indiceFrase -= 1;
    }
    //vou fazer um if para verificar que quando não houver espaços retornar o tamanho da palavra
    if(indiceFrase === -1){
        return tamanho;
    }
    //aqui vamos criar um retorna quando achamos um espaço em branco
    return tamanho;
}

let frase1 = 'a ultima palavra é BATATA';
let frase2 = 'amor';
console.log(lenghtOfLastWord(frase1));
console.log(lenghtOfLastWord(frase2));