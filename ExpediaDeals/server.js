////////////////*require express framework*///////////////
var express = require('express');
var app = express();
////////////////*require request to make http request*///////////////
var request = require("request");
var path = require('path');
////////////////*serve FrontEend  *///////////////
app.use(express.static(path.join(__dirname,'dist')));
/// here I am serve the dist cause am used angular2 as front end //
////////////////*Routes configuration *///////////////
app.get('/api/expedia',function(req,res) {
	request("https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel", function(error, response, body) {
  // console.log(body);
  res.json(JSON.parse(body))
});

    
});

////////////////*run server*///////////////
var port = process.env.PORT || 4500;
app.listen(port,function(){
	console.log("server run on port"+port)
});