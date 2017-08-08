'use strict';

const express = require('express');
const router = express.Router();

const PORT = 3389;
const HOST = '0.0.0.0';

const app = express();

console.log(router);
app.use('/', router);

router.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);