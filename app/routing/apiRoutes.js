var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log()

  });
 
 app.post("/api/friends", function(req,res){
  var data = req.body;

  var userScores = data.scores;

  console.log("This is: ", userScores);
 });
 
};