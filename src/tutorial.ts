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

// export function sayHello(name: string): void {
//   console.log(`Hello ${name}`);
// }

// export let person = "susan";

// type Student = {
//   name: string;
//   age: number;
// };

// const newStudent: Student = {
//   name: "Shake and Bake",
//   age: 20,
// };

// export default newStudent;

// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// function checkValue(value: ValueType) {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//     return;
//   } else if (typeof value === "number") {
//     console.log(value.toFixed(2));
//     return;
//   } else {
//     console.log(`boolean: ${value}`);
//   }
// }

// checkValue(value);

// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else if (animal.type === "cat") {
//     animal.meow();
//   }
// }

// function makeSound(animal: Animal): void {
//   if ("bark" in animal) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// let animal: Animal = {
//   type: "dog",
//   name: "doggy",
//   bark() {
//     console.log("bark bark bark");
//   },
// };

// makeSound(animal);

// function printLength(str: string | null | undefined) {
//   if (str) {
//     console.log(str.length);
//   } else {
//     console.log(`No String Provided`);
//   }
// }

// printLength("Hello I am nothing but a single thing");
// printLength(null);
// printLength(undefined);

// - Start by defining the function using the function keyword followed by the function name, in this case checkInput.
// - Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
// - Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
// - If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
// - If the input is not an instance of Date (which means it must be a string), return the input as it is.
// - After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
// - You can store the return value of the function in a variable and then log it to the console to see the result

// function checkInput(input: Date | string) {
//   if (input instanceof Date) {
//     return input.getFullYear().toString();
//   } else {
//     return input;
//   }
// }

// console.log(checkInput(new Date()));
// console.log(checkInput(`${new Date().getFullYear()}`));

// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: "john", study: () => console.log("Studying") }
//     : { name: "mary", login: () => console.log("Logging in") };
// };

// const person = randomPerson();

// function isStudent(person: Person): person is Student {
//   //   return student in person;
//   return (person as Student).study !== undefined;
// }

// if (isStudent(person)) {
//   person.study();
// } else {
//   person.login();
// }

// type IncrementAction = {
//   type: "increment";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: "decrement";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action) {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;
//     default:
//       const unexpectedAction: never = action;
//       throw new Error(`Unexpection action : ${unexpectedAction}`);
//   }
// }

// const newState = reducer(15, {
//   type: "increment",
//   user: "john",
//   amount: 5,
//   timestamp: 12345,
// });

//Type Generics

// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ["Apple", "Banana", "Mango"];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

// function createString(arg: string): string {
//   return arg;
// }

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunction<string>("hello");

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }
// const genericString: GenericInterface<string> = {
//   value: "hello",
//   getValue() {
//     return this.value;
//   },
// };

// console.log(genericString.getValue());

// async function someFun(): Promise<string> {
//   return 2345;
// }

// let x = createArray<string>(3, "hello");
// let y = createArray(5, 100);

// function createArray<T>(length: number, value: T): T[] {
//   let arr: T[] = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }

// console.log(x);
// console.log(y);

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }

// console.log(pair(10, "hello"));

// function processValues<T extends string>(values: T): T {
//   console.log(values);
//   return values;
// }

//

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumbers: StoreData<number> = {
//   data: [1, 2, 3, 4, 5],
// };

// const randomStuff: StoreData = {
//   data: ["hello", "true", "j"],
// };

// const { data } = axios.get(someUrl);

// const { data2 } = axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }

// const url = "https://www.course-api.com/react-tours-project";

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     const errmsg =
//       error instanceof Error ? error.message : "there was an error......";
//     console.log(errmsg);
//     return [];
//   }
// }

// const tours = await fetchData(url);

// tours?.map((tour) => {
//   console.log(tour.title);
// });
// import { z } from "zod";

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
// });

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: number;
// };

// type Tour = z.infer<typeof tourSchema>;

// const url = "https://www.course-api.com/react-tours-project";

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const rawData: Tour[] = await response.json();
//     const result = tourSchema.array().safeParse(rawData);
//     console.log(rawData);
//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }
//     return result.data;
//   } catch (error) {
//     const errmsg =
//       error instanceof Error ? error.message : "there was an error......";
//     console.log(errmsg);
//     return [];
//   }
// }

// let tours = await fetchData(url);

// tours.map((tour) => {
//   console.log(tour.name);
// });

// import { Random } from "./types";

// document;

// class Book {
//   private checkedOut: boolean = false;
//   constructor(public title: string, public author: string) {}
//   get info() {
//     return `Title: ${this.title}, Author: ${this.author}`;
//   }
//   set checkOut(checkedOut: boolean) {
//     this.checkedOut = checkedOut;
//   }
// }

// const deepWork = new Book("deep work ", "cal newport");

// console.log(deepWork.info);
// deepWork.checkOut = true;
// console.log(deepWork);

interface Iperson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements Iperson {
  constructor(public name: string, public age: number) {}
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const surya = new Person("surya", 20);

surya.greet();
