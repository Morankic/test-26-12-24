// Ulaz je string koji se sastoji od riječi i razmaka. Vratiti dužinu posljednje riječi u stringu.

// Riječ je maksimalni podstring koji se sastoji samo od znakova koji nisu razmaci.

// Primjer 1:

// Ulaz: str = "Hello World"
// Izlaz: 5
// Objašnjenje: Posljednja riječ je "World" čija je dužina 5.

 let str = "Hello World";

 function prvaPraznina(niz){
 for(let i =0;i<str.length;i++){
    if(str[i]=== ' ') return(i);
 }
}

let rjesenje = prvaPraznina(str);
console.log(rjesenje);

let finalnoRjesenje= (str.length-rjesenje)-1;
console.log(finalnoRjesenje);





