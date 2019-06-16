const express = require('express');
const app = express();

//... your code here ...
            
app.get('/', (req, res) => req.json('Hello World'));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});