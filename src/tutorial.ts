// console.log("typeScript tutorial");

// let awesomeName: string = "shakeAndBake";

// awesomeName = "Something";
// console.log(awesomeName);

// let amount: number = 10;

// amount = 2 - 1;

// let isAwesome: boolean = true;
// isAwesome = false;

// isAwesome = "shakeAndBake";

// let quote: string = "Welcome to the course";

// quote = quote.toUpperCase();

// console.log(quote);

// let num: number = 20;

// console.log(num / 2);

// quote = true;

// num = "Hello World";

// console.log(quote);

// console.log(num);

// let tax: number | string = 10;
// tax = 100;
// tax = "$10";

// let requestStatus: "pending" | "Success" | "error" = "pending";

// requestStatus = "pending";

// let notSure: any = 4;

// notSure = "maybe a string instead";

// notSure = false;

// let random;

// random = "ironman"

// const books = ["1984", "Brave New World", "Fahrenheit 451"];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === "1984") {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }

// console.log(foundBook?.length);

// console.log(foundBook);

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";

// orderStatus = "shipped";

// orderStatus = "delivered";

// console.log(orderStatus);

// let discount: number | string = 20;

// discount = "20%";

// console.log(discount);

//////////Arrays

// let prices: number[] = [10, 20, 30, 40, 50];

// let fruit: string[] = ["apple", "banana", "orange"];

// // let randomValues:[] = ['surya']

// let emptyValues = [];

// let names = ["peter", "susan", 1230];

// let array: (string | boolean)[] = [true, false, "Iron man"];

// let arrTemperature: number[] = [10, 20, 30, 40, 50];

// arrTemperature[1] = "30 celcius";

// let arrColor: string[] = ["red", "green", "blue"];

// arrColor[1] = 2403985;

// let arr: (string | number)[] = ["ironman", 23, 939, 28303];

// arr[0] = true;

// let car: { brand: string; year: number; color: string } = {
//   brand: "20",
//   year: 2020,
//   color: "blue",
// };

// car.color = "surya";

// let book = { title: "book", cost: 20 };
// let pen = { title: "pen", cost: 20 };
// let notebook = { title: "notebook" };

// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].cost = 23;

// - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
// - Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// - Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

// let bike: { brand: string; year: number } = { brand: "Honda", year: 2020 };
// bike.year = "2020";
// let laptop: { brand: string; year: number } = { brand: "Lenovo" };

// let arr: { title: string; readonly price?: number }[] = [
//   { title: "book", price: 20 },
//   { title: "pen", price: 20 },
//   { title: "notebook" },
// ];

// arr.push({title: "shoes", price: "surya"});

// function sayHi(name: string) {
//   console.log(`Hello ${name.toUpperCase()}`);
// }

// console.log(sayHi("Shake and Bake"));

// function calculateDiscount(price: number) {
//   const hasDiscount = true;
//   if (hasDiscount) {
//     return "Discount Applied";
//   }

//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(100);

// let names: string[] = ["peter", "susan", "Jonas"];

// function checkName(name: string): boolean {
//   return names.includes(name);
// }

// console.log(names.map((name) => checkName(name)));

// let nameToCheck = "susan";

// if (checkName(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list`);
// } else {
//   console.log(`${nameToCheck} is not in the list`);
// }

// function calculatePrice(price: number, discount?: number) {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function calculateScore(
//   initialScore: number,
//   penaltyPoints: number = 0
// ): number {
//   return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);

// let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...num: number[]): string {
  let total = num.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(result);
