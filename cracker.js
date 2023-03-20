let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=readLine().split(" ").map(Number)
let c=n[0]
let i=n[1]
let d=c%i

if(d==0){
    console.log(0);
}else{
    console.log(1);
}
