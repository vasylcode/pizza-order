const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());


const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log("App started, port " + PORT));
    } catch (error) {
        console.log("Server Error:", error.message)
        process.exit(1);
    }
}

start();

app.use('/api/pizza', require('./routes/pizza.routes'));
app.use('/api/categories', require('./routes/categories.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/order', require('./routes/order.routes'));