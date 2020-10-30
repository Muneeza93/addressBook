const mongoose = require("mongoose");

//client schema
const clientSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  email: { type: String },
});

//export
module.exports = mongoose.model("Client", clientSchema);
