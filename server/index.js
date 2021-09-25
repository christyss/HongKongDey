const express = require('express');
const cors = require('cors');
const wordsRoute = require('./routes/words');
const slangRoute = require('./routes/slang');
const quizRoute = require('./routes/multiple-choice-questions');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

app.use((req, res, next) => {
    console.log("response");
    next();
});

app.use('/', wordsRoute);

app.use('/', slangRoute);

app.use('/', quizRoute);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
