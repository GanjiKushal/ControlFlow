let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let A=readLine().split(" ");
let B=readLine().split(" ");
let a1=parseInt(A["0"]);
let a2=parseInt(A["1"]);
let a3=parseInt(A["2"]);
let b1=parseInt(B["0"]);
let b2=parseInt(B["1"]);
let b3=parseInt(B["2"]);
let AdB=a1*b1+a2*b2+a3*b3;
let AxB=Math.sqrt(((a2*b3-a3*b2)**2)-((a1*b3-b1*a3)**2)+((a1*b2-a2*b1)**2));
if (AdB==0) {
    console.log(2);
}
else if(AxB==0) {
    console.log(1);
}
else {
    console.log(0)
}