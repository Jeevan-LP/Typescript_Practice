/*
try      → Code that may cause an error
catch    → Handles the error
throw    → Manually generates an error
finally  → Executes whether error occurs or not
A try block cannot be used alone in TypeScript. It must be followed by either a catch block, a finally block, or both.
*/

//try block is used to wrap the code that may cause an error. 
//If an error occurs, the control is transferred to the catch block. 
//If no error occurs, the catch block is skipped and the program continues executing the next statement after the try-catch-finally block.

//try and catch block can be used to handle exceptions that may occur during the execution of a program.
try{
    //throw new Error("Error occurred in try block");//creating a new error object and throwing it to the catch block
    console.log("Executing try block");
}
catch(error){
    console.log("Exception:", error);
}

//try and finally block can be used to execute code that must run regardless of whether an error occurs or not.
try{
    //throw new Error("Error occurred in try block");//creating a new error object and throwing it to the catch block
    console.log("Executing try block");
}
finally{
    console.log("Executing finally block");
}

//try, catch, and finally blocks can be used together to handle exceptions and execute code that must run regardless of whether an error occurs or not.
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
/*
        try
         ↓
   Error occurred?
      /       \
    Yes        No
     ↓          ↓
   catch       continue
     \          /
      ↓        ↓
       finally
          ↓
       continue
*/

/*
catch(error)
            console.error(`Payment creation failed for Company: ${PaymentDataDrivenTest.Company}`);
            //console.log((error as Error).message);
            //console.log("Cause: ",(error as Error).cause);
            //console.log("Name: ",(error as Error).name);
            //console.log("Stack: ",(error as Error).stack);
            if (error instanceof Error) {
                console.error(`Error: ${error.message}`);
            }
            throw error;  
*/

try{
    //console.log("try block executed...");
    throw new Error("error in try block...");
}
catch(error){
    console.log("catch block executed...");
    console.log("Error message",(error as Error).message);

    throw error;
}
finally{
    console.log("finally block executed...");
}