let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

for(let i=0;i<10000;i++){
    let p=parseInt(readLine())
    if(p<100 && p>=0 && p!=42){
        console.log(p);
    }
    else if(p==42){
        break
    }
}