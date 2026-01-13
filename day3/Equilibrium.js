let a=[-7, 1, 5, 2, -4, 3, 0];
let s1=0;
let s2=0;

for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i];j++){
        s1++;        
    }
    for(let k=a[i+1];k<a.length;k++){
        s2++;
    }
    if(s1==s2){
        console.log(i);
    }
    else{
        console.log(-1);
    }
}



for(let i=0;i<a.length;i++){
    do{
        for(let j=0;j<a[i];j++){
            s1++;
        }
        for(let k=a[i];k<a.length;k++){
            s2++;
        }
    }
    while(s1==s2)
        console.log(a[i]);
}
