let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let N=parseInt(readLine())
let n1=parseInt(readLine())
let count=0
for(let i=0;i<N;i++){
    let n=parseInt(readLine())
    if(n==n1){
        count++
    }
}
console.log(count);