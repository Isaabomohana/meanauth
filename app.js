 const express = require('express');
 const path = require('path');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const passport = require('passport');
 const Mongod = require('mongod');
 const mongoose = require('mongoose');
 const config = require('./config/database');
 
 const server = new Mongod(27017);
 
 server.open((err) => {
  if (err === null) {
    // You may now connect a client to the MongoDB
    // server bound to port 27017.
  }
});
 
 mongoose.connect(config.database);
 mongoose.connection.on('connected', () => {
   console.log('Connected to Database'+ config.database);
 });
 
 const app = express();
 
 const users = require('./routes/users');
 
 const port = 3000;
 
 // cors let user gain permission to access selected resources from a server on a different origin (domain) 
 app.use(cors());
 
 // use static
 app.use('/static', express.static(path.join(__dirname, 'public')))
 
 app.use(bodyParser.json());
 app.use('/users', users);

 
 app.get('/', (req, res) => {
   res.send('index');
 });
 
 
 
 app.listen(port, () => {
   console.log('Server started at port:'+port);
 });