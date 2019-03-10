var axios = require("axios");
var fs = require("fs");

// TV constructor Object

var TV = function(){

    var divider = "\n-----------------------------\n\n";

    this.findshow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    
    axios.get(URL).then(function(response) {

        var json = response.data

        var showReturn = [
            "Show: " + json.name,
            "Genre(s): " + json.genres.join(","),
            "Rating: " + json.rating.average,
            "Network: " + json.network.name,
            "Summary: " + json.summary
          ].join("\n\n");

          //print data to .txt

            fs.appendFile("log.txt", showReturn + divider, function(err) {
                if (err) throw err;

                //log dat to console
                console.log(showReturn);
            });
        });
      };
    };

    
      module.exports = TV;