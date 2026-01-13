let n=[16, 17, 4, 3, 5, 2];

for(let i=0;i<n.length;i++){
    for(let j=i+1;j<=n.length;j++){

        if(n[i]>n[j]){
            break;
        }
        else{
            console.log(n[i]);
        }
    }
}