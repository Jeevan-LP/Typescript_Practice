/*
* String - text value or a combination of characters
* Single quote - string literal ('')
* Double quote - string literal (" ")
* Backtick (` `) - string template - when we try to use a string variable inside another string value ${variable}
* Index in string starts with 0
* '' or " " or ` `
*/
//Ex:
let Singlequote:string='Jeevan';
console.log("Single quote string: ", Singlequote);//Jeevan

let Doublequote:string="L P";
console.log("Double quote string: ", Doublequote);//L P

console.log("Backtick string:", `${Singlequote} ${Doublequote}`);//Jeevan L P

//String methods

//1. lenght - find the lenght of a string 
let str:string="Hello TypeScript";
console.log("lenght method: ", str.length);//16

//2. toLowerCase and toUpperCase
console.log("toLowerCase method: ", str.toLowerCase())//hello typescript
console.log("toUpperCase method: ", str.toUpperCase())//HELLO TYPESCRIPT

//3. charAt and indexOf
console.log("charAt method: ", str.charAt(1));//e
console.log("indexOf method: ", str.indexOf("T"));//6

//4. substring
console.log("substring method: ", str.substring(10,16));//Script

//5. includes()
console.log("includes method: ", str.includes("Hello"));//true

//6. startWith and endsWith
console.log("startWith method: ", str.startsWith("Hello"));//true
console.log("endsWith method: ", str.endsWith("JavaScript"));//false

//7. replace
console.log("replace method: ", str.replace("TypeScript", "JavaScript"));//Hello JavaScript

//8. split - break thw string into multiple parts based on the delimeter, return an array
let split:string[]=str.split(" ");
console.log("split method 1 : ", split);//[ 'Hello', 'TypeScript' ]
let str2:string="Jeevan-Appu";
let split2:string[]=str2.split("-");
console.log("split method 2 : ", split2);//[ 'Jeevan', 'Appu' ]

//9 trim, trimStart, trimEnd
let str3="   Hi Jeevan   ";
console.log("trim method: ", str3.trim());//Hi Jeevan
console.log("trimStart method: ", str3.trimStart());//Hi Jeevan   
console.log("trimEnd method: ", str3.trimEnd());//    Hi Jeevan

//10. concat
let str4="My ";
let str5="Name is ";
let str6="Jeevan";
console.log("concat method 1: ", str4.concat(str5));//My Name is 
console.log("concat method 2: ", str4.concat(str5).concat(str6));//My Name is Jeevan
console.log("concat method 3: ", str5+str6);//Name is Jeevan
console.log("concat method 4: ".concat(" completed"));//completed




