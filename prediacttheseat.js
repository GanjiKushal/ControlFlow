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
    let n=readLine().split(" ").map(Number)
    let c=n[0]
    let s=n[1]
    if(s<=c){
        if(s%8==1 || s%8==4){
            console.log("Lower");
        }
        else if(s%8==2 || s%8==5){
            console.log("Middle");
        }
        else if(s%8==3 || s%8==6){
            console.log("Upper");
        }
        else if(s%8==7){
            console.log("SideLower");
        }
        else if(s%8==0) {
            console.log("SideUpper");
        }
    }
    else{
        console.log("Invalid");
    }
    
}