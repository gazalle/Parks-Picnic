const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemsSchema = new Schema({name: String});
const MembersSchema = new Schema({name: String, item:String});
const ParksSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      distance: {
        type: Number,
        required: true
      },
      groups:[{
          name: String,
          items: [ItemsSchema],
          isAvailable: Boolean,
          members:[MembersSchema]
      }]
});

mongoose.model('Parks', ParksSchema);