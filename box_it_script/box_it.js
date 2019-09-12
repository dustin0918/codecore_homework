const names = process.argv.splice(2);
const chars ={
    "hLine": "━",
    "top-left":"┏",
    "top-right":"┓",
    "bottom-left":"┗",
    "bottom-right":"┛",
    "mid-left":"┣",
    "mid-right":"┫",
    "vLine":"┃"
};
function drawLine(length,frame){
    let output ='';
    for (let a=0;a<length;a++){
        output = output + chars.hLine
    }
    
    if (frame == 'top'){
        return chars['top-left']+output+chars['top-right']+'\n';
    }else if(frame =='bottom'){
        return chars ['bottom-left']+ output +chars['bottom-right']+'\n';
    }else{
        return chars['mid-left']+output +chars['mid-right']+ '\n';
    }
        
}
function drawRow(value,length){
    return chars.vLine+ value.padEnd(length,' ') + chars.vLine + "\n";
}
let maxLength = 0;
names.forEach((val) => {
    if(val.length>maxLength){
        maxLength=val.length;
    }
})
let middleContent ='';
names.forEach((val,index) => {
    middleContent=middleContent+drawRow(val,maxLength);
    if (index<names.length-1){
        middleContent=middleContent + drawLine(maxLength)
    }
})
result = drawLine(maxLength, 'top') + middleContent + drawLine(maxLength, 'bottom')
console.log(result)


