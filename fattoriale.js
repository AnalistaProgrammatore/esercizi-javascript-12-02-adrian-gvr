function fatt(n) {
    if (n === 0)
        return 1;
    else
        return n * (fatt(n - 1));
}
console.log(fatt(5));