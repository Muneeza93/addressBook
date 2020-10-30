const mongoose = require("mongoose");

//global promise
mongoose.Promise = global.Promise;
//connect to db
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

//import model
const Client = require("./models/client");

//Add client
const addClient = (client) => {
  Client.create(client).then((client) => {
    console.info("New client added");
  });
};

//Find client
const findClient = (name) => {
  //make case insensitive
  const search = new RegExp(name, "i");
  Client.find({ $or: [{ firstName: search }, { lastName: search }] }).then(
    (client) => {
      console.info(client);
      console.info(`${client.length} client`);
    }
  );
};

//update client
const updateClient = (_id, client) => {
  Client.update({ _id }, client).then((client) => {
    console.info(client);
    console.info("client has been updated");
  });
};

//delete client
const removeClient = (_id) => {
  Client.remove({ _id }).then((client) => {
    console.info("client has been deleted successfully");
  });
};

//list registered clients
const listClients = () => {
  Client.find().then((clients) => {
    console.info(clients);
    console.info(`${clients.length} clients`);
  });
};

//export methods
module.exports = {
  addClient,
  findClient,
  updateClient,
  removeClient,
  listClients,
};
