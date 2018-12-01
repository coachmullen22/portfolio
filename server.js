'use strict';

// Node Modules
// dependencies
require('dotenv').config();
const express = require('express');

// app  (Sets up server for the entire application)
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

app.use(express.static('.public/'));

app.get('/hello', (request, response) => {
  response.status(200).send('hello');
})

//app.get('hom)

app.use('*', (req, res) => {
  res.status(400).send('Sorry that didnt work');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))




// 'use strict';

// const express = require('express');

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.static('./public'));

// app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));