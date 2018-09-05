// note_routes.js
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.get('/collectible/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('collectible').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

app.post('/collectible', (req, res) => {
    const item = { 
        //DEFINED COLLECTIBLE STRUCTURE
        name:req.body.name, 
        image: req.body.image,
        description: req.body.description,
        external_url: req.body.external_url,
        background_color: req.body.background_color
    };
    db.collection('collectible').insert(item, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/collectible/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('collectible').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('collectible ' + id + ' deleted!');
      } 
    });
  });


  app.put('/collectible/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const item = { 
        //DEFINED COLLECTIBLE STRUCTURE
        name:req.body.name, 
        image: req.body.image,
        description: req.body.description,
        external_url: req.body.external_url,
        background_color: req.body.background_color
    };
    db.collection('collectible').update(details, item, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(item);
      } 
    });
  });


};

//DELETE



 