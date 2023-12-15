// m)

enum Role {
    Admin,
    User,
    Guest
}

interface Person {
    name: string;
    age: number;
    role: Role;
}

let myTuple: [number, string, boolean, Person, Role] = [42, "hello", true, { name: "Pashka", age: 20, role: Role.User }, Role.Admin];

// n)

console.log("Котреж целиком", myTuple);
console.log("Выборочные элементы:", myTuple[1], myTuple[3], myTuple[4]);

// o)

let [numValue, strValue, booleanValue] = myTuple;

// p)

let readOnlyTuple: Readonly<[number, string]> = [1, "example"];

// q) 

let anotherTuple: [number, string] = [1, "example"];
console.log("Кортежи одинаковы:", JSON.stringify(readOnlyTuple) === JSON.stringify(anotherTuple));

// r)

let optionalTuple: [number, string?] = [42];
console.log("Котреж с необязательным элементом :", optionalTuple);