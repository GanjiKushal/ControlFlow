let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let arr=readLine().split(" ").map(Number)
let sum=0
for(let i=0;i<n;i++){
    sum=sum+arr[i]
}
console.log(Math.floor(sum/n));
console.log(Math.ceil(sum/n));