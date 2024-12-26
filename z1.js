// Za niz cijelih brojeva nums i cijeli broj target, trebaš vratiti indekse dva broja tako da njihov zbir bude jednak cilju (target).

// Možeš pretpostaviti da svaki ulaz ima tačno jedno rješenje, i ne smiješ koristiti isti element dva puta.

// Odgovor može biti vraćen u bilo kojem redoslijedu.

// Primjer:

// Ulaz: nums = [2,7,11,15], target = 9
// Izlaz: [0,1]
// Objašnjenje: Pošto nums[0] + nums[1] == 9, vraćamo [0, 1].

const nums = [2, 7, 11, 15];
const target = 9;

function testiraj(niz, trazeniBroj) {
    for (let i = 0; i < niz.length; i++) {
        for (let j = i + 1; j < niz.length; j++) {
            if (niz[i] + niz[j] === trazeniBroj) return { prviBroj: niz[i], drugiBroj :niz[j]} ;
        }
    }
    console.log("Nijedan zbir 2 broja ne daje vrijednost target");
}
let rezultat = testiraj(nums, target);
console.log(rezultat);

