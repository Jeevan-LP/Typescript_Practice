try{
    //throw new Error("Error occurred in try block");//creating a new error object and throwing it to the catch block
    console.log("Executing try block");
}
catch(error){
    console.log("Exception:", error);
}

try{
    throw new Error("Error occurred in try block");//creating a new error object and throwing it to the catch block
    console.log("Executing try block");
}
finally{
    console.log("Executing finally block");
}

try{
    //throw new Error("Error occurred in try block");//creating a new error object and throwing it to the catch block
    console.log("Executing try block");
}
catch(error){
    console.log("Exception:", error);
}
finally{
    console.log("Executing finally block");
}