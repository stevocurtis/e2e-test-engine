var express = require('express');
var app = express();
var testUtils = require('./test-utils');
const logger = require('./logger-service').logger;

app.get('/url', (req, res, next) => {
    logger.warn('running url method');
    const responsePayload = {
        'a': 1,
        'b': 2,
        'id': testUtils.getUuid()
    }
    res.json(responsePayload)
})

app.listen(3000, () => {
    logger.info('Server running on port 3000');
})
