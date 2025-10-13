const notaDoPrimeiroBi = 8;
const notaDoSegundoBi = 6.3;
const notaDoTerceiroBi = 7;
const notaDoQuartoBi = 9.3;

let media = (notaDoPrimeiroBi + notaDoSegundoBi + notaDoTerceiroBi + notaDoQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`A média é ${media.toFixed(2)}`);