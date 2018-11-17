'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));