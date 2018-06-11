const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)
console.log("Welcome to remindme");
const reminders = "take a nap";
const reminderFile = "reminders.txt";

fs.writeFileSync(reminderFile, reminders);
console.log("Wrote all of the reminders to the file");