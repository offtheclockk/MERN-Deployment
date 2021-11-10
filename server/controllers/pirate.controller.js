const { Pirate } = require('../models/pirate.model');
module.exports.index = (request, response) => {
          response.json({
                    message: "Hello World"
          });
}

module.exports.createPirate = (request, response) => {
          const { name, image, treasure, phrase, position, pegLeg, eyePatch, hookHand } = request.body;
          Pirate.create({
                    name,
                    image,
                    treasure,
                    phrase,
                    position,
                    pegLeg,
                    eyePatch,
                    hookHand
          })
                    .then(pirate => response.json(pirate))
                    .catch(err => response.status(400).json(err));
}

module.exports.getAllPirates = (request, response) => {
          Pirate.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
                    .then(pirates => response.json(pirates))
                    .catch(err => response.json(err))
}

module.exports.getPirate = (request, response) => {
          Pirate.findOne({ _id: request.params.id })
                    .then(pirate => response.json(pirate))
                    .catch(err => response.json(err))
}

module.exports.updatePirate = (request, response) => {
          Pirate.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
                    .then(updatedPirate => response.json(updatedPirate))
                    .catch(err => response.json(err))
}

module.exports.deletePirate = (request, response) => {
          Pirate.deleteOne({ _id: request.params.id })
                    .then(deleteConfirmation => response.json(deleteConfirmation))
                    .catch(err => response.json(err))
}



