let valorPontuacao = 0;
let vidaPlayer = 100;

console.log("O valor da pontuaçao antes da funçao reduzirVida:",valorPontuacao);
console.log("O valor de vidaPlayer antes da funçao reduzirVida:",vidaPlayer);

function verificarPontuacao(pontuacao){
    if(pontuacao > 10){

        console.log("ok");
        console.log("a condiçao pontuaçao > 10: ", pontuacao > 10);
    }else{
        console.log("n ok");
    }
}

function reduzirVida(vida){

    vida = vida - 1;
    if(vida < 0){
        vida = 0;
    }
    return vida;
}

verificarPontuacao(valorPontuacao);
vidaPlayer = reduzirVida(vidaPlayer);

console.log("O valor da pontuaçao depois da funçao reduzirVida: ", valorPontuacao);
console.log("O valor de vidaPlayer depois da funçao reduzirVida: ", vidaPlayer);
