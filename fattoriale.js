const fatt = n => n === 1 ? 1 : (n * fatt(n - 1));
console.log(fatt(5));
// commento
