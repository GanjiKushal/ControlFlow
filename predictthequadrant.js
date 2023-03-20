let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
for(let i=1;i<=n;i++){
    let Q=readLine().split(" ").map(Number)
    let x=Q[0]
    let y=Q[1]
    if(x>0 && y>0){
        console.log("Q1");
    }
    else if(x<0 && y>0){
        console.log("Q2");
    }
    else if(x<0 && y<0){
        console.log("Q3");
    }
    else if(x>0 && y<0){
        console.log("Q4");
    }
}