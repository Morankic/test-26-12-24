// Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

// 	Ulaz: 
// 	["Sings", "like", "Thunder"];
// const separator = "-";

// 	Izlaz: 
// 	“Sings-like-Thunder”

let string = ['Sings', 'Like', 'Thunder'];
const seperator = '-';

let rjesenje = string.map((e, i) => (i+1 < string.length) ? niz = e + seperator : e)

console.log(rjesenje[0].concat(rjesenje[1]).concat(rjesenje[2]));



