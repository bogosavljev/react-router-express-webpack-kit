const express = require('express');
const path = require('path');
const port = process.env.PORT || 9009;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
});

app.listen(port);
console.log('Server started');
