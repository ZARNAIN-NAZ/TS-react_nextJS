var myVar = "hello";
var ageWithType;
ageWithType = 34;
var another;
another = ["ali", "murtaza", 90];
var user = {
    name: "ali",
    price: 3432,
    class: 3,
};
user.name = "mahad";
var userObj;
userObj = {
    name: "john",
    class: 3,
    isAdmin: true,
    phone: 34343242,
};
var newArr;
newArr = ["saba", true, { n: "n" }, 67];
//FUNCTIONS
var sayHi = function () {
    console.log("hi");
};
var returnString = function () {
    return "hello";
};
var multiple = function (num) {
    return num * 4;
}; //both works same
var multiple1 = function (num) {
    return num * 4;
};
var multiple2 = function (num) {
    //   return num * 4;
    // it dont return anything
};
var sum = function (num1, num2) {
    return num1 + num2;
};
sum(3, 3);
