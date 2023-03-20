let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let sum=0
let temp=n
while(temp>0){
    let rem=temp%10
    sum=sum+rem**3
    temp=parseInt(temp/10)
}
console.log(sum);
if(sum==n){
    console.log("Yes");
}
else{
    console.log("No");
}