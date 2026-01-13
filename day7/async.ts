const fetchMsg=(): Promise<string> =>{
    return new Promise ((Resolve, reject)=>{
        setTimeout(()=> {
            const success=Math.random()>0.5;
            if(success){
                Resolve("success");
            }
            else{
                reject("reject");
            }
        },1000) ;
    });

};

fetchMsg()
.then((msg) => {
    console.log(msg.toUpperCase());
})
.catch((error :Error)=> {
    console.log("Error:", error.message);
})

