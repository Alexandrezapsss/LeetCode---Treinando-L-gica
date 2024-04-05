//faça uma função que receba ou um valor booleano ou numerico e inverter se for True retorna false se o npumero for positivo ele retorna negativo
//solução mais longa bem passo a passo
let inverte = (valor) => {
    if (typeof(valor) === 'boolean') {//varificamos o tipo de dado
    //usamos um estrutura de decisão para inverter o valor de forma literal
      if (valor == true) {
        return false;
      } else if (valor == false) {
        return true;
      }
    } else if (typeof(valor) === "number") {//identificamos o tipo
      if (valor >= 0) {
        return valor - (valor * 2);//usamos uma calculo mais leigo para chegar no resultado
      } else if (valor < 0) {
        return valor + (valor * 2);
      }
    }
    // Retorna undefined se o valor não for booleano ou numérico
    return undefined;
  };

console.log(inverte(true))
console.log(inverte(false))
console.log(inverte(10))
console.log(inverte(-10))
console.log("------------------------------------------------")

//agora a versão mais fácil deste mesmo problema
let inverte2 = valor =>{
    if(typeof(valor) === 'boolean'){
        return !valor
    }
    else if(typeof(valor) === 'number'){
        return -valor;
    }
    else {
        return undefined;
    }
}
console.log(inverte2(true))
console.log(inverte2(false))
console.log(inverte2(10))
console.log(inverte2(-10))
console.log("------------------------------------------------")
//uma solução no paradigma funcional
let inverte3 = valor => typeof(valor) === 'boolean' ? !valor : typeof(valor) === "number" ? -valor : undefined;

console.log(inverte3(true))
console.log(inverte3(false))
console.log(inverte3(10))
console.log(inverte3(-10))