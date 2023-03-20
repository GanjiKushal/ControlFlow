let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
let temp=n
let sum=0
while(temp>0){
    let rem=parseInt(temp%10)
    sum=sum*10+rem
    temp=parseInt(temp/10)
}
if(n==sum){
    console.log("Its a Palindrome");
}
else{
    console.log("Not a Palindrme");
}