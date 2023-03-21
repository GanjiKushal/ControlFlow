let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let m=parseInt(readLine())
let n=parseInt(readLine())
// for(let i=m;i<=n;i++){

// }
if(m<0 && n<0){
    console.log(-1);
}
else{
    for(let i=m;i<=n;i++){
        if(i<0){
            continue
        }
        else{
            console.log(i);
        }
    }
}