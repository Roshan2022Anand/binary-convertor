const input = document.getElementById('num-input');
const btn = document.getElementById('btn');
const output = document.getElementById('output')
btn.addEventListener("click",()=>{
    let binaryNum = Number(input.value);
    let decimalNum = "";
    let power = 16;
    while(power >= 0){
        if(binaryNum >= 2**power){
            binaryNum-=(2**power);
            decimalNum+="1";
        }else if(decimalNum != "" || power<=3)
            decimalNum+="0";
        power--;
    }
    // for(let i=0;i<2)
    output.innerText = decimalNum;   
})