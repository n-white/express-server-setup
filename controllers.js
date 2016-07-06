var models = require('./models');


module.exports = {

  names: {
    get: function(req, res) {
      models.names.get(function(err, results){
        if (err) {
          console.log('controllers names get: ', err);
          throw err;
        }
        res.json(results); // the results of models.names.get is sent to client in json format 
      })
    },
    post: function(req, res) {
      var tempParam;
      // listen for data on the request
      req.on('data', function(data) {
        // convert the data into the parameters
        tempParam = JSON.parse(data.toString());
        var params = [tempParam.name];
        // invoke the models.post method and pass in the name that was sent by the client
        models.names.post(params, function(err, results) {
          if (err) {
            console.log('controllers names post: ', err);
            throw err;
          }
          console.log('posted');
        })
      });
    }
  }
}