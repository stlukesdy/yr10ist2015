var express = require('express');
var app = express();


app.use( express.static( __dirname + '/public' ) );

if (process !== null){
  console.log('Your code is running at https://' + process.env.C9_HOSTNAME);
  app.listen(process.env.PORT, process.env.IP);  
}else{
  app.listen(3000);  
}
