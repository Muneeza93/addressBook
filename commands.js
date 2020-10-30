#!/usr/bin/env node
const { description } = require("commander");
const program = require("commander");
const { prompt } = require("inquirer");

const {
  addClient,
  findClient,
  updateClient,
  removeClient,
  listClients,
} = require("./index");

//client questions
const questions = [
  {
    type: "input",
    name: "firstName",
    message: "Enter first Name",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter last Name",
  },
  {
    type: "input",
    name: "phone",
    message: "Enter your phone No.",
  },
  {
    type: "input",
    name: "email",
    message: "enter your email",
  },
];

program.version("1.0.0").description("addressBook");

// program
//   .command("add <firstName> <lastName> <phone> <email>")
//   .alias("a")
//   .description("Add a client")
//   .action((firstName, lastName, phone, email) => {
//     addClient({ firstName, lastName, phone, email });
//   });

//add command
program
  .command(" add ")
  .alias("a")
  .description("Add a client")
  .action(() => {
    prompt(questions).then((answers) => addClient(answers));
  });

//find command
program
  .command("find <name>")
  .alias("f")
  .description("Find a client")
  .action((name) => findClient(name));

//update command
program
  .command("update <_id>")
  .alias("u")
  .description("update client status")
  .action((_id) => {
    prompt(questions).then((answers) => updateClient(_id, answers));
  });

//delete command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove client")
  .action((_id) => removeClient(_id));

//List command
program
  .command("list")
  .alias("l")
  .description("List all clients")
  .action(() => listClients());

program.parse(process.argv);
