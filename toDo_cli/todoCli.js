const fs = require('fs');
const readline = require('readline');

const header = 'Welcome to Todo CLI! \n-----------------';
const choice = '(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit';


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
console.log(header);
console.log(choice);
let task =[];




rl.on('line',(input)=>{
    if (input[0]=='v'){
        console.log(taskList());
        console.log(choice);     
    }else if(input[0]=='n'){
        rl.question('What? \n', mission=>{
            task.push(addTaskToList(mission));
            console.log(choice);
        })  
    }else if (input[0]=='c'){
        finished(input[1]);
        console.log(choice);
        
    }else if (input[0]=='d'){
        deleted(input[1]);
        console.log(choice);
        
    }else if(input[0]=='q'){
        let data =JSON.stringify(task);
        fs.writeFile('tasks.txt', data, (err) => {
            if (err) throw err;
            console.log( 'Saved at /task.txt');
        });    
        rl.close();
        console.log('See you soon!');  
    }      
})
function addTaskToList(mission) {
    return {
      name: mission,
      completed:false,
    };
}
function taskList(){
    if (task.length===0){
        return 'list is empty';
    }else{
        let v =''
        for(let i=0;i<task.length;i++){
            if (task[i].completed){
                v += i + '[√]' +task[i].name;
            }else{
                v+= i + '[ ]'+ task[i].name;
            }v+= '\n';
        }return v;
    }
}
function finished(index){
    task[index].completed = true;
    console.log('Completed "' + task[index].name +'"');
}
function deleted(index){
    
    console.log('Deleted "' + task[index].name +'"')
    task.splice(index,1);
    
};







