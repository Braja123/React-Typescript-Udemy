let userName;

userName = 34;

let bbb: boolean;

// Union type
let userID: string | number = "abc1";
userID = 123

// type alias
type StringOrNum = string | number;
let userID1: StringOrNum = "abc1";

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

// By using type alias
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}
let user1: User;

user = {
    name: "sanu",
    age: 29,
    isAdmin: true,
    id: "abc1"
}

// let hobbies: Array<string>; // OR
let hobbies: string[]; // number[], boolean[]

hobbies = ['sanu', 'dipa', 'das'];

// function add(a: number, b: number): undefined { // here undefined means this function will return
function add(a: number, b: number): void { // if any funtion doesn't return anything then use "void"
    const result = a + b;
    console.log(result);
}
function add1(a: number, b: number): number { // here return is a number so function type is a number or you can also ignore to write function type as typescript will explicitly add type
    const result = a + b;
    return result;
}


// Here for calc() we define signature type like below
function calculate(a: number, b: number, calc: (a: number, b: number) => number) {
    calc(a, b)
}
calculate(2, 5, add1);

// type alias - it is used to create custom types so that we can reuse
type AddFun = (a: number, b: number) => number

function calculate1(a: number, b: number, calc: AddFun) {
    calc(a, b)
}
calculate1(2, 5, add1);

// Interface types mostly used for create object types
interface Credentials {
    password: string;
    email: string;
}
interface Credentials {
    mode: string;
}

let creds: Credentials;

creds = {
    password: "1asdas",
    email: "sanu@gmail.com",
    mode: "abc"
}

// type Admin = {
//     permissions: string[]
// }
// type AppUser = {
//     userName: string
// }
// // Here AppAdmin uses both Admin & AppUser types
// // also known as merging types
// type AppAdmin = Admin & AppUser

// let admin: AppAdmin;

// admin = {
//     permissions: ["login"],
//     userName: "sanu"
// }

// Mergin Interface
interface Admin {
    permissions: string[]
}
interface AppUser {
    userName: string
}

interface AppAdmin extends Admin, AppUser {
    // write anything extra needs to add or keep it empty
}

let admin: AppAdmin;

admin = {
    permissions: ["login"],
    userName: "sanu"
}

// Specific string types or any types
let role: 'admin';
role = 'admin';
// role = 'sag' // wrong

// For more specific types
let role1: 'admin' | 'user' | 'editor' | 1;
role1 = 'admin';
role1 = 'user';

type Role = 'admin' | 'user' | 'editor' | 1;

// Type Guards by using union types
function performAction(action: string, role: Role) {
    if (role === 'admin' && typeof admin === "string") {  // here as role as union types so you can add some conditions
        // ...
    }
}

//  Generic Types
let roles: Array<Role>
//  let roles: Role[]
roles = ['admin', 1]

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

const testStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data)
    },
}

const userStorage: DataStorage<User> = {    // Here User is another type
    storage: [],
    add(user) {}
}

function merge<T, U>(a: T, b: U) {
    return {
        ...a, ...b
    }
}
// const newUser = merge<{name: string}, {age: number}>({ name: "Sanu"}, {age: 29})     OR
const newUser = merge({ name: "Sanu"}, {age: 29})

newUser.name