



function newfunction(cb){
    setTimeout(() => {
        cb(null,"Hi here");
        }
        ,10);
}
newfunction((err,data)=>{
    if(err) throw err;
    else{
        console.log("data",data);
    }
    
});

