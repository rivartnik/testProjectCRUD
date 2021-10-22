
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Buckets = new Schema({
  name:String,
   location:{ type: Schema.Types.ObjectId, ref: 'Locations', required:true }
   // location:Schema.Types.ObjectId
}, {
  collection: 'buckets'
})
let Locations = new Schema({
  name:String,
}, {
  collection: 'locations'
})
mongoose.model("Locations", Locations )

module.exports = mongoose.model('Buckets', Buckets)

