let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


let N=parseInt(readLine())
for(let i=0;i<N;i++){
    let n=parseInt(readLine())
    if(n>2){
        console.log(1);
    }
    else{
        console.log(-1);
    }
}