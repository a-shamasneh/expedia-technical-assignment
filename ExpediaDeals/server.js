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
  
  	var data=JSON.parse(body);
  	/*data now represnet object of objects and i need just offers for hotel 
  	so i will return key Hotel which mean Array of object
	
  	*/
	console.log(data.offers.Hotel)
  res.json(data.offers.Hotel)
});

    
});

////////////////*run server*///////////////
var port = process.env.PORT || 9000;
app.listen(port,function(){
	console.log("server run on port"+port)
});