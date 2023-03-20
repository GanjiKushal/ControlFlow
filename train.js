let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=readLine().split(" ").map(Number)
let N=n[0]
let i=n[1]
console.log(N+1-i);