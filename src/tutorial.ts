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

// function sum(message: string, ...num: number[]): string {
//   let total = num.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);

//   return `${message}${total}`;
// }

// let result = sum("The total is : ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(result);

// function logMessage(message: string): void {
//   console.log(message);
//   return `Hello ${message}`;
// }

// logMessage("Hello World");

// function processInput(input: string | number) {
//   console.log(typeof input === "string" ? `${input.toUpperCase()}` : input * 2);
// }

// processInput(10);
// processInput("Hello World");

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// console.log(createEmployee({ id: 10 }));
// console.log(createEmployee({ id: 23 }));

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Student ${student.name} with id ${student.id} is created`);
// }

// createStudent({ id: 10, name: "Shake and Bake" });

// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ) {
//   if (typeof input === "string" && config.reverse) {
//     return input.split("").reverse().join("");
//   } else if (typeof input === "string") {
//     return input.toUpperCase();
//   } else if (typeof input === "number") {
//     return input * input;
//   }
// }

// const res1 = processData("Hello World", { reverse: true });
// const res2 = processData(10);
// const res3 = processData("Surya kumar");

// console.log(res1, res2, res3);

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

// const john: User = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// type Theme = "light" | "dark";

// let theme: Theme;

// function setTheme(t: Theme): void {
//   theme = t;
// }

// setTheme("light");

// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// type Manager = {
//   id: number;
//   name: string;
//   employees: Employee[];
// };

// const alice: Employee = { id: 1, name: "alice", department: "Sales" };
// const steve: Employee = { id: 2, name: "steve", department: "HR" };

// const bob: Manager = { id: 3, name: "bob", employees: [alice, steve] };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff) {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is an manager with the ${staff.employees.length} employees`
//     );
//   } else {
//     console.log(`Name: ${staff.name}, Department: ${staff.department}`);
//   }
// }

// printStaffDetails(alice);
// printStaffDetails(steve);
// printStaffDetails(bob);

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

// type Book = {
//   id: number;
//   name: string;
//   price: number;
// };

// const book1: Book = {
//   id: 1,
//   name: "The Great Gatsby",
//   price: 10,
// };

// const book2: Book = {
//   id: 2,
//   name: "The Catcher in the Rye",
//   price: 20,
// };

// const discountedBook: Book & { discount: number } = {
//   id: 3,
//   name: "Gnomes vs. Humans",
//   price: 20,
//   discount: 0.15,
// };

// const propName = "age";

// type Animal = {
//   [propName]: number;
// };

// let tiger: Animal = { [propName]: 10 };

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   year: number;
//   genre?: string;
//   //method
//   printAuthor(): void;
//   printTitle(message: string): void;
//   printSomething: (someValue: number) => number;
// }

// type Book = {
//   isbn: number;
//   title: string;
//   author: string;
//   year: number;
//   genre?: string;
// };

// const deepWork: Book = {
//   isbn: 123,
//   title: "Deep Work",
//   author: "Cal Newport",
//   year: 2017,
//   genre: "self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     console.log(`${this.title} ${message}`);
//   },
//   //first option
//   printSomething: function (someValue) {
//     return someValue;
//   },

//   //second option
//   printSomething: (someValue) => {
//     console.log(this);
//     return someValue;
//   },
// };

// const res = deepWork.printSomething(23);

// console.log(res);

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(num: number): void;
// }

// let lenovoPc: Computer = {
//   id: 1,
//   brand: "Lenovo",
//   ram: 8,
//   upgradeRam(num) {
//     return num + this.ram;
//   },
// };

// console.log(lenovoPc.upgradeRam(10));
// console.log(lenovoPc);

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "john",
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: "jane",
//   age: 28,
//   employeeId: 10,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee Id: ${this.employeeId}`;
//   },
// };

// console.log(person.getDetails());
// console.log(employee.getDetails());

// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: "bob",
//   age: 35,
//   dogName: "rex",
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log("Managing People.........");
//   },
// };

// console.log(manager);

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person, DogOwner {
//   managePeople(): void;
//   delegateTasks(): void;
// }
// const person: Person = {
//   name: "Surya Kumar D",
// };

// const dogOwner: DogOwner = {
//   name: " Surya Kumar D",
//   dogName: "Rex",
// };

// const manager: Manager = {
//   name: "Surya Kumar D",
//   dogName: "Rex",
//   managePeople() {
//     console.log("Managing People.........");
//   },
//   delegateTasks() {
//     console.log("Delegating Tasks.........");
//   },
// };

// function getEmployee(): Person | DogOwner | Manager {
//   const randomNum = Math.random();
//   if (randomNum < 0.33) {
//     return person;
//   } else if (randomNum < 0.66) {
//     return dogOwner;
//   } else {
//     return manager;
//   }
// }

// let employee: Person | DogOwner | Manager = getEmployee();

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }

// console.log(isManager(employee));

//tupe in typescript

// let person: [string, number] = ["john", 25];

// let date: [number, number, number] = [2020, 10, 20];

// function getPerson(): [string, number] {
//   return ["john", 25];
// }

// let randomPerson = getPerson();

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [email: string, phone: number];
// };

// function createUser(user: User): User {
//   return user;
// }

// const res = createUser({
//   id: 1,
//   name: "Shake and Bake",
//   role: UserRole.Admin,
//   contact: ["shakeandbake@gmail.com", 1234567890],
// });

// console.log(res);

// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;

// type Bird = {
//   name: string;
// };

// enum Status {
//   Pending = "pending",
//   Declined = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// let unkownValue: unknown;

// unkownValue = "this is a string";
// unkownValue = 10;
// unkownValue = [1, 2, 3];
// unkownValue = 532.43;

export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person = "susan";

type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "Shake and Bake",
  age: 20,
};

export default newStudent;
