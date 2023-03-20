let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
if(n<1200 && n>0){
  console.log("ABC");
}
else if(n>=1200 && n<2800){
  console.log("ARC");
}
else{
  console.log("AGC");
}