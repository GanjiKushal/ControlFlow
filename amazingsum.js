let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let N=parseInt(readLine())
let arr=[]
for(let i=0;i<N;i++){
    arr[i]=parseInt(readLine())
}
let sum=0
for(let i=1;i<N;i++){
    if(arr[i-1]+arr[i]>100){
       sum=arr[i-1]+arr[i]
    }
}
if(sum>100){
    console.log(true);
}else{
    console.log(false);
}