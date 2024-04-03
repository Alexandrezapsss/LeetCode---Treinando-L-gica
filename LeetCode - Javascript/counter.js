//dado um valor inteiro n faça ele retorna ele mesmo e em seguida retornar o mesmo valor a mais ou seja n +1 até
//que ele ultrapasse esse valor até 3 contagens positivas
//Ex: n = 1 -> return [1, 2, 3]
//Ex: n = -2 -> return [-2,-1,0,1,2]

let contador = (n) => {
    //lista para armazenar os resultados e o proprio valor de n
    let lista = [];
    //adicionando o valor de n a lista
    lista.push(n)

    //se n for positivo
    if(n >= 0){
        for(let i = n + 1; i < n + 3; i++){
            lista.push(i);
        }
    }
    //se n for negativo
    else if(n < 0){
        for(let i = n + 1; i <= 3; i++){
            lista.push(i)
        }
    }

    return lista;
}

console.log(contador(3));
console.log(contador(-22));