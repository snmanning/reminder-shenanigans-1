const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

const reminderFile = "reminders.txt";

//list command, where all of the reminders are printed
//add command where we can add a reminder
const args = process.argv.slice(2);
const subcommand = args[0];
if(subcommand === 'list'){
    console.log('list');
} else if(subcommand === 'add'){
    console.log('add');
} else {
    console.log('Please check your command syntax');
}
process.exit(0);

fs.unlinkSync(reminderFile);
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

//for loop 
for(let i = 0; i < reminders.length; i += 1){
    const reminder = reminders[i];
    const date = dates[i];
    const line = `${reminder}|${date}\n`;
    fs.appendFileSync(reminderFile, line);
}
console.log("Wrote all of the reminders to the file");