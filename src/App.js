const express = require('express');
const { PORT } = require('./config.js');
const guayasrouter = require('./routes/guayas.routes.js');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Usar las rutas definidas en guayasrouter
app.use('/post', guayasrouter);

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});