// m)
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myTuple = [42, "hello", true, { name: "Pashka", age: 20, role: Role.User }, Role.Admin];
// n)
console.log("Котреж целиком", myTuple);
console.log("Выборочные элементы:", myTuple[1], myTuple[3], myTuple[4]);
// o)
let [numValue, strValue, booleanValue] = myTuple;
// p)
let readOnlyTuple = [1, "example"];
// q) 
let anotherTuple = [1, "example"];
console.log("Кортежи одинаковы:", JSON.stringify(readOnlyTuple) === JSON.stringify(anotherTuple));
// r)
let optionalTuple = [42];
console.log("Котреж с необязательным элементом :", optionalTuple);
