const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: [true, "Name is a required parameter."],
                    minlength: [2, "Name has to be at least 2 characters long."]
          },
          image: {
                    type: String,
                    required: [true, "Image is a required parameter."],
          },
          treasure: {
                    type: Number,
                    required: [true, "# of Treasures is a required parameter."],
          },
          phrase: {
                    type: String,
                    required: [true, "Catch Phrase is a required parameter."],
                    minlength: [10, "Catch Phrase has to be at least 10 characters long."]
          },
          position: {
                    type: String,
                    required: [true, "Position is a required parameter."],
          },
          pegLeg: {
                    type: String
          },
          eyePatch: {
                    type: String
          },
          hookHand: {
                    type: String
          }

}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);