const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

const reminderFile = "reminders.txt";

const reminders = [
    "get some milk", //0
    "work out", //1
    "get groceries", //2
    "groom the dog", //3
    "take a nap" //4
];
const dates = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date()
];
//list command, where all of the reminders are printed
//add command where we can add a reminder
const args = process.argv.slice(2);
const subcommand = args[0];
if(subcommand === 'list'){
    list();
} else if(subcommand === 'add'){
    add();    
} else {
    help();
}

console.log("Completed your request.");
process.exit(0);

function list(){
    console.log('Here are the things that you need to do...');
    reminders.forEach((reminder, index) => {
        const line = `-     ${reminder}           Due: ${dates[index]}`;
        console.log(line);
    });
}

function add(){
    console.log('add');
    fs.unlinkSync(reminderFile);
    for(let i = 0; i < reminders.length; i += 1){
        const reminder = reminders[i];
        const date = dates[i];
        const line = `${reminder}|${date}\n`;
        fs.appendFileSync(reminderFile, line);
    }
}

function help(){
    console.log('Please check your command syntax');
}