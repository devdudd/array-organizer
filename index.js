import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });
const arr = [];

const result = () => {
    rl.question('Type your CSS list:', (answer) => {
        if (answer == 'Exit' || answer == 'EXIT' || answer == 'exit'){
            console.log(`Your list:\n${arr.sort().join(`\n`)}`);
            return rl.close();
        } else {
            arr.push(answer);
        }
        result();
    })
}
result();