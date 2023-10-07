const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.port || 3000;

app.listen(port, () => console.info(`App listen in port ${port}`))