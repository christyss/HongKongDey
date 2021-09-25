const express = require('express');
const router = express.Router();
const fs = require('fs');

const wordsPath = "./data/words.json";

const readData = () => {
    const wordsFileContent = fs.readFileSync(wordsPath);
    const parseWordsFileContent = JSON.parse(wordsFileContent);
    return parseWordsFileContent;
}

router.get('/learning/words', (_req, res) => {
    try{
        const words = readData();
        return res.status(200).json(words); 
    }catch(err){
        return res.status(500).json({error: "File cannot be read."})
    }
});

module.exports = router;
