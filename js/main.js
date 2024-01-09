const resultElement = document.getElementById("main-title");

// Chiedere all'utente il numero di chilometri che vuole percorrere
const userKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(userKm);

// Chiedere l'età del passeggero
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const fullPrice = (userKm * 0.21).toFixed(2);
console.log(fullPrice);

// Va applicato uno sconto del 20% per i minorenni
const minPrice = (fullPrice - (fullPrice * 20) / 100).toFixed(2);
console.log(minPrice);

// Va applicato uno sconto del 40% per gli over 65
const overPrice = (fullPrice - (fullPrice * 40) / 100).toFixed(2);
console.log(overPrice);

if (userAge < 18) {
  resultElement.innerText = "Il prezzo del tuo biglietto è" + minPrice + "euro";
}

if (userAge > 65) {
  resultElement.innerText =
    "Il prezzo del tuo biglietto è" + overPrice + "euro";
}
