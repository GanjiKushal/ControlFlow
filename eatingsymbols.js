let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let str=readLine()
let sum=0
for(let i=0;i<str.length;i++){
    if(str[i]=="+"){
        sum=sum+1
    }
    else if(str[i]=="-"){
        sum=sum-1
    }
}
console.log(sum);