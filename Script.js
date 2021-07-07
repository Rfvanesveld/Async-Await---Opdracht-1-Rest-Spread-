log = console.log

// Functie 1..................................................


// function optelSom(...numbers) {
//     return numbers.reduce((last, current) => last + current)
// }

// log(optelSom(1, 2, 3, 4, 5, 6))


// Functie 2 ( met een paar nummers)..................................................

optelSom2 = function (a, b, c, d) {
    return a + b + c + d
};

let numbers1 = [1, 2, 3, 4]

log(optelSom2(...numbers1))

// Functie 2 ( met veel meer  nummers)..................................................

optelSom3 = function () {
    return numbers2.reduce((last, current) => last + current)
};

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]

log(optelSom3(...numbers2))