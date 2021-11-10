const PirateController = require('../controllers/pirate.controller');
module.exports = function (app) {
          app.get('/api', PirateController.index);
          app.post('/api/pirate', PirateController.createPirate);
          app.get('/api/pirates', PirateController.getAllPirates);
          app.get('/api/pirates/:id', PirateController.getPirate);
          app.put('/api/pirates/:id', PirateController.updatePirate);
          app.delete('/api/pirates/:id', PirateController.deletePirate);
}