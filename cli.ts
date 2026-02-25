const {command} = require("commander")

const program = new command()

program
.command("greet <name>")
.action((name) => {
  console.log(`Hello, ${name}!`);
});

program.parse();
