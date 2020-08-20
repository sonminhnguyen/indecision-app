const express = require('express');
const http = require('http')
const path = require('path');

const app = express();
const server = http.createServer(app);

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname , '../public')))
app.use(express.static(__dirname));

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

server.listen(port);