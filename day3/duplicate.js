let n=[4, 3, 6, 2, 1, 1];

for(let i=0;i<=n.length;i++){
    for(let j=i+1;j<=n.length;j++){
        if (n[i]==n[j]){
            console.log(n[i]);
        }
    }
    
  
}