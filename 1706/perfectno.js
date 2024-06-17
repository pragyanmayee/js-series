let n=6;
let s=0;
console.log("number is",n);
for(let i=1;i<=n;i++){
    if(n%i==0){
        s=s+i;
    }
}
if(s==n*2){
    console.log("number is a perfect number");
}else{
    console.log("number is not a perfect number");
}