let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let length=parseInt(readLine())
let breath=parseInt(readLine())
if(length>0 && breath>0){
    console.log(length*breath);
}else{
    console.log(0);
}