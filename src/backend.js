
var express = require('express')
  , bodyParser = require('body-parser');

var app = express();
    app.use(bodyParser.json());

app.post('/login', function(request, response){
  console.log(request.body);
  if ( request.body.pass === '123' ){
    response.json({success:true});
  } else {
    response.json({success:false});
  }
});

app.listen(4000);
