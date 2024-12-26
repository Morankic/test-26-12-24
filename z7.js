// Napiši funkciju koja vraća objekt s brojem pojavljivanja svakog elementa u nizu.

// 	Ulaz: 
// 	[1, 2, 2, 2, 3, 3, 4]

// 	Izlaz: 
// 	{ 1: 1, 2: 3, 3: 2, 4: 1 }
const nizBrojeva = [1, 2, 2, 2, 3, 3, 4];

function brojPojavljivanja(niz) {
    const rezultat = {};
    niz.forEach(broj => {
        rezultat[broj] = rezultat[broj]!== undefined ? rezultat[broj]+1 : (rezultat[broj] || 0) + 1;
    });
    return rezultat;
}
const rezultat = brojPojavljivanja(nizBrojeva);
console.log(rezultat);


