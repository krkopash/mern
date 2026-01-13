//Promise
const checkEven = (): Promise<string> =>{
    return new Promise((resolve,reject)=>{
        let num=5;
        if(num%2===0)
            resolve("even");
        else
            reject("odd");
    });
}

checkEven()
.then((num)=>{
    console.log(num);
})
.catch((error)=>{
    console.log(error);
});

//Using async/await
const asyncFun = async() =>{
    try{
         const n = await checkEven();
        console.log(n);
    }
    catch(error){
        console.error("error");
    }
};

//return promise from fun
const getInfo = (id:number): Promise<{ id: number; name: string}> =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ id, name: "hello"});
        }, 1000);
    });
};

//promise.all
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve("hello");

Promise.all([promise1, promise2]).then(([num, str])=>{
    console.log(nu)
})