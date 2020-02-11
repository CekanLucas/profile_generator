// Since we'll be surveying the user, we need a nice way to ask questions and fetch answers.

// Instead of reading one character at a time, as we've done with stdin directly, Node has a built-in module to read one line at a time.

const readline = require('readline');

const q = [ //questions
  `What's your name? Nicknames are also acceptable :)\n`,
  `What's an activity you like doing?\n`,
  `What do you listen to while doing that?\n`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)\n`,
  `What's your favourite thing to eat for that meal?\n`,
  `Which sport is your absolute favourite?\n`,
  `What is your superpower? In a few words, tell us what you are amazing at!\n`
];

let i = 0;
const IO = () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }); //need to reinitialise rl every iteration

  rl.question(
    q[i], // question from q array
    ans => { // callback func, ans is input from user
      console.log(`Thank you for your valuable feedback: ${ans}`);
      rl.close();
      
      i++;
      if (q[i] === undefined) {
        return 1; //exit when reach end of q
      }
      IO(); //recursive magic
    }
  );
};
IO(); // start recursive function