let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=readLine().split(" ").map(Number)
let A=n[0]
let B=n[1]
if(A%2!=0 && B%2!=0){
    console.log("Yes");
}
else{
    console.log("No");
}