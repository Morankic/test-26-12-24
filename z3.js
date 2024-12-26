// Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu. 

// 	Ulaz: 
// 	[1, 2, 3, 4, 5]

// 	Izlaz: 
// 	[4, 5]

const prviNiz = [1, 2, 3, 4, 5];
let zbir = 0;
let trenutniBroj = 0;
let brojac=0;

prviNiz.map((e) => {
    brojac++;
    zbir += e;
prosjek=zbir/brojac;
})
console.log(prosjek);

let rjesenje = prviNiz.filter((e)=> e>prosjek );
console.log(rjesenje);


