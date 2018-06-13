const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)
console.log("Welcome to remindme");

const reminderFile = "reminders.txt";
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