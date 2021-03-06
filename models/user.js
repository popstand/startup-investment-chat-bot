var mongoose = require("mongoose");

// user
var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  senderID: Number,
});
// var UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     index: true
//   },
//   equipped: Boolean,
//   owner_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true
//   },
//   room_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     index: true
//   }
// });

var User = mongoose.model('User', UserSchema);

module.exports = {
  User: User
}
