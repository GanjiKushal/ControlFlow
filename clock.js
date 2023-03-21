let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=readLine().split(" ").map(Number)
if((n[0]+n[1])%12==0){
    console.log(12);
}
else{
    console.log((n[0]+n[1])%12);
}