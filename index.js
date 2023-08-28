// init node server using express
const express = require('express');
const app = express();
const port = 3000;

// init socket.io

const http = require('http').Server(app);

// get / to return index.html

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}
);


// listen on port 3000

http.listen(port, () => {
    console.log(`listening on port ${port}`);
}
);
