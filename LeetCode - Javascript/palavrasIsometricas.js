//teste de palavras isometricas ou seja que tenha grandesas iguais ex true : Ana, Ava - ex false: Faca,  Casa
//teste de complexidade fácil porem tem que saber que palavras isometricas tem o mesmo peso

let palavrasIsometricas = (n1, n2) =>{
    //primeiro vamos padronizar os dados - vamos deixar elas minusculas
    let palavra1 = n1.toLowerCase();
    let palavra2 = n2.toLowerCase();

    //segundo passo garantir que as palavras tenham o mesmo tamanho
    if(palavra1 !== palavra2){
        return false; // se as palavras não tiverm o mesmo tamanho já retornamos false
    }
    // vamos verificar a correspondencia - tem uma solução onde criamos um objeto e colocamos todas as letras mas não entendi a solução
    // vou criar um obj para armazenar as correpondencias
    let armazena = {}

    //vou usar um loop para armazenar os caracteres das palavras 
    for(let i = 0; palavra1.length; i++){
        let carac1 = palavra1[i];
        let carac2 = palavra2[i];

        //fazer uma varificação com a palavra 2
        if(armazena[carac1] && armazena[carac1] !== carac2){
            return false;
        }
        // Se o caractere de palavra1 não tiver uma correspondência, vamos estabelecê-la
        if (!correspondencia[char1]) {
            correspondencia[char1] = char2;
        }
    }

    //se chegarmos até aqui as palavras são isometricas
    return true;
}