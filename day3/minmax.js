const n=[2,4,6,1,8,3];
let num=0;

//max
for(let i=0;i<=n.length;i++){
    if(n[i]>num){
        num=n[i];
    }
}
console.log(num);

//min
for(let i=0;i<=n.length;i++){
    if(n[i]<m){
        m=n[i];
    }
}
console.log(m);