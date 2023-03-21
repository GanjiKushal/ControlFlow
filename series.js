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
for(let i=1;i<=N;i++){
    arr[i]=(i*(i+1))/2
}
console.log(arr[N]);