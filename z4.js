// Napiši funkciju koja prima 2D niz (matricu) i vraća njegovu transponovanu verziju 
// (redovi orginalnog niza postaju kolone novog niza).

// 	Ulaz: 
// 	[1, 2, 3],
// [4, 5, 6], 
// [7, 8, 9]

// Izlaz: 
// [1, 4, 7],
// 	[2, 5, 8], 
// [3, 6, 9]

let rjesenje = [];
let niz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let test  = niz.map((e, i) => rjesenje.push(e[0]))
let test2 = niz.map((e, i) => rjesenje.push(e[1]))
let test3 = niz.map((e, i) => rjesenje.push(e[2]))

console.log(rjesenje);
