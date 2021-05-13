const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
    res.json({message: 'hello world!'});
});

app.get('/sample', (_req, res) => {
    res.json({message: 'this is sample endpoint'});
});

app.use((_err, _req, res, _next) => {
    res.status(500).send('some error occurred');
});

const server = app.listen(port, () => {
    console.log(`app is running at ${port}`);
});

const shutdown = () => {
    console.log('shutting down gracefully...');
    server.close(() => {
        console.log('app has been terminated');
        process.exit(0);
    });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
