let iD:number[]=[1,2,3,4,5,6];
let vehicle:string[]=["Thar", "Yezdi", "Jawa", "Swift"];

// length attribute
console.log("length of iD array: ",iD.length); //9
console.log("Original array:",iD);

//1. unShift - add single/multiple elements to the begining of an array
iD.unshift(-1, 0);
console.log("unshift method: ",iD); //[-1, 0, 1, 2, 3, 4,5, 6]

//2. push - add single/multiple elements to the end of an array
iD.push(7,8);
console.log("push method: ",iD); //[-1, 0, 1, 2, 3, 4,5, 6, 7, 8]

//3. shift - remove the first element from an array
iD.shift();
console.log("shift method: ",iD); //[0, 1, 2, 3, 4,5, 6, 7, 8]

//4. pop - remove the last element from an array
iD.pop();
console.log("pop method: ",iD); //[0, 1, 2, 3, 4,5, 6, 7]

//5. concat - combines two or more arrays of same type
let combined=iD.concat([8,9],[10]);
console.log("concat method: ",combined); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//6. slice - extracts a section of an array
//staring index starts from zero
//ending index will be exclusive ex: if 3 is ending index it will consider 2 (3-1=2)
let slice=iD.slice(2, 5);
console.log("slice method: ",slice); //[2, 3, 4]

//7. Adds/Removes elements from an array(from everywhere)
//syntax: array.splice(start, deleteCount, item1, .....item-N)

//ex: 1 removing
console.log("Original vehicle array:", vehicle); //["Thar", "Yezdi", "Jawa", "Swift"]
let splice=vehicle.splice(1,2);
console.log("splice method removing: ", splice); //[ 'Yezdi', 'Jawa' ]

//ex: 2 adding
vehicle.splice(2, 0, "Benz", "Audi", "Minicooper");
console.log("splice method adding: ", vehicle); //

//ex: 2 removing and adding
vehicle.splice(1, 3, "Fortuner", "Porsche");
console.log("splice method removing and adding: ",vehicle);//[ 'Thar', 'Fortuner', 'Porsche', 'Minicooper']

//8. indexOf - find the index of elements, if not fount any elements then will return -1
let index=vehicle.indexOf("Fortuner");
console.log("indexOf method: ", index);
let index2=vehicle.indexOf("Lexus");
console.log("if not fount any elements: ", index2);

//9. includes - check whether element is present or not
let present=vehicle.includes("Minicooper");
console.log("is element present? ", present);
let present1=vehicle.includes("Lexus");
console.log("is element present? ", present1);

//10. toString - convert array into the string
let convert=vehicle.toString();
console.log("toString method: ", convert);

let array:string[]=["A", "P", "P", "U"];
console.log("before convert array toString", array);
console.log("after convert string toString", array.toString());