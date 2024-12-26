// Napiši funkciju koja pronalazi razliku između najveće i najmanje vrijednosti u nizu.

// 	Ulaz:
// [7, 3, 10, 15, 2] 

// 	Izlaz: 
// 	13 //(15 - 2)

const niz = [7, 3, 10, 15, 2];

function oduzmiNajmanjiBrojOdNajveceg(nekiNiz){
let najveciBroj = niz[0];
let rjesenje = niz.filter((e) => e > najveciBroj );
trenutnoNajveci= rjesenje[0];
let finalnoNajveci= rjesenje.filter((e)=>e>trenutnoNajveci)
console.log(`Najveci ${finalnoNajveci}`);

let najmanjiBroj = niz[0];
let nadjiNajmanji = niz.filter((e) => e < najmanjiBroj );
let noviNajmanji = nadjiNajmanji[0];
let finalnoNajmanji = niz.filter((e) => e < noviNajmanji );
console.log(`Najmanji ${finalnoNajmanji}`);


finalnoRjesenje = finalnoNajveci-finalnoNajmanji;
return finalnoRjesenje;
}
console.log(oduzmiNajmanjiBrojOdNajveceg(niz))


