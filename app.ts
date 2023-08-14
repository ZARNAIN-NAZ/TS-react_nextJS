// let myVar = "hello";
// let ageWithType: number;
// ageWithType = 34;
// let another: (string | number)[];
// another = ["ali", "murtaza", 90];
// let user = {
//   name: "ali",
//   price: 3432,
//   class: 3,
// };
// user.name = "mahad";

// let userObj: {
//   name: string;
//   class: number;
//   isAdmin: boolean;
//   phone?: number;
// };
// userObj = {
//   name: "john",
//   class: 3,
//   isAdmin: true,
//   phone: 34343242,
// };

// let newArr: any[];
// newArr = ["saba", true, { n: "n" }, 67];

// //FUNCTIONS
// let sayHi = () => {
//   console.log("hi");
// };
// let returnString = (): string => {
//   return "hello";
// };
// let multiple = (num: number) => {
//   return num * 4;
// }; //both works same
// let multiple1 = (num: number): number => {
//   return num * 4;
// };
// let multiple2 = (num: number):void => {
// //   return num * 4;
// // it dont return anything
// };

let Sum=(num1:number , num2:number)=>{
    return num1+ num2
}
Sum(3,3)
