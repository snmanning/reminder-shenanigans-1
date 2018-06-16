const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

const reminderFile = "reminders.txt";


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
    const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
    const parsedLines = lines.map(line => line.split("|"));
    const humanFriendlyLines = parsedLines.map(parsedLine => {
        const reminder = parsedLine[0];
        const date = parsedLine[1];
        return `-     ${reminder}           Due: ${date}`;
    });
    const output = humanFriendlyLines.join('\n');
    console.log(output);
}

function add(){
    console.log('Adding a new reminder...');
    const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
    const parsedLines = lines.map(line => line.split("|"));
    fs.unlinkSync(reminderFile);
    const outputLines = parsedLines.map(line => {
        const reminder = line[0];
        const date = line[1];
        return `${reminder}|${date}`;
    });
    const output = outputLines.join('\n');
    fs.appendFileSync(reminderFile, output);
}

function help(){
    console.log('Please check your command syntax');
}