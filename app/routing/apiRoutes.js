var Friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
  res.json(Friends);
 
  });

  app.post("/api/friendupdate", function(req, res) {

    console.log("Friends Data:");
    console.log(req.body);
//retrive new user from requests
    var newFriend = req.body
//compare new users answer to each existing user
   var bestMatch = {}
   var bestDiff = 51
Friends.forEach( function(friend){
  var diff= 0
       friend.scores.forEach(function(score, index){
        diff += Math.abs(newFriend.scores[index]- score)
       })
       if (bestDiff > diff){ 
         bestDiff = diff
         bestMatch.name = friend.name
         bestMatch.image = friend.image
       }
    });
    res.json(bestMatch);
   Friends.push(newFriend); 

  });

};