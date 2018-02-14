var path = require("path");

module.exports = function(app) {

  // app.get("/", function(req, res){
  // 	res.sendFiles(path.join(__dirname, "../public/home.html"));
  // });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    //why is public necessary?
  });
  // If no matching route is found default to home
  //WHat is the asterik here?
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};