let n=[10, 20, 30, 40];
let x=10;
let y=50;

for(let i =0;i<n.length;i++){
    for(let j=i+1;j<n.length;j++){
        if(n[i]==x && n[j]==y){
            console.log(j-i);
        }
        else{
            console.log(-1);
        }
    }
}