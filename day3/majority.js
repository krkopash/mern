let arr=[1,1,2,1,3,5,1];
        let n=0;
        for(let i=0;i<arr.length;i++){
            for(let k=i+1;k<arr.length;k++){
                if(n[i]==n[k]){
                    n++;
                }
                if(n>arr.length/2){
                    console.log(n[i]);
                }
            }
        }