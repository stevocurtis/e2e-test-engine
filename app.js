var express = require('express');
var app = express();
var testUtils = require('./test-utils');

app.get('/url', (req, res, next) => {
    const responsePayload = {
        'a': 1,
        'b': 2,
        'id': testUtils.getUuid()
    }
    res.json(responsePayload)
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
