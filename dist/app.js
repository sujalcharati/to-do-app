"use strict";
const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => console.log('the server is running on port 3000'));
