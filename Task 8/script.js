/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = 0;
  this.b = 5;
  this.getSum = function () {
    return `sum = ${this.a + this.b}`;
  };
  this.getSubtr = function fn() {
    return `subtraction = ${this.a - this.b}`;
  };
  this.getMultip = function func() {
    return `multiplication = ${this.a * this.b}`;
  };
  this.getDivis = function funcc() {
    return `division = ${this.a / this.b}`;
  };
}
const myNumbers = new Calculator(56, 79);

console.log(myNumbers.getDivis());
