console.log("//for loop.............");
for(let j=1;j<=5;j++){
    if(j%2==0){
        console.log("Even number:"+j);
    }
    else{
        console.log("Odd number:"+j);
    }
}

console.log("//while loop.............");
let i:number=1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("//Do-while loop.............");
let k:number=6;
do{
console.log(k);
k--;
}
while(k>0);

console.log("//break loop.............");
for(let l=1;l<=5;l++){
    if(l==3){
        break;
    }
console.log(l);
}

console.log("//continue loop.............");
for(let m=1;m<=5;m++){
    if(m==3 || m==4){
        continue;
    }
console.log(m);
}