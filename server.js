var express =	require('express'),
				app	= express(),
		 logger = require('morgan'),
 bodyParser = require('body-parser'),
   mongoose = require('mongoose'),
	apiRoutes = express.Router(),
	 	 	 port = process.env.PORT || 3000

//let's connect to mongo
mongoose.connect('mongodb://localhost/')

//logs request to app
app.use(logger('dev'))

//set the public folder as the static assets serving folder
// app.use(express.static('public'))

//create root route
app.get('/',function(req, res){
	console.log("Working...")
  res.send('Welcome')
})
//use imported routes
app.use('/api', apiRoutes)
app.listen(port, function(){
  console.log('Server running on port ' + port)
})
