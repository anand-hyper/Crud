
// const error = new Error("something went wrong");
// console.log(error.message);

//throw new Error("this is undefined error");

const {CustomError} = require("./Customerror");
// throw new CustomError("this is new error");


//try catch method


// try{
//     dosomething();
// } catch(e){
//     console.log(e);
// }

function dosomething(){
    console.log("iam from dofunction");
    const data = fetch("localhost:3000/api");
}


// process.on("uncaughtException",(err) =>{
//     console.log("thre is uncaught exception");
//     process.exit(1);
// })

// dosomething();

const someFunction = async() =>{
    try{
          await dosomething();
    }catch(err){
        throw new CustomError(err.message);
    }

}
someFunction();