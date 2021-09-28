const express = require('express');
const router = express.Router();
const fs = require('fs');

const wordsPath = "./data/words.json";

const readData = () => {
    const wordsFileContent = fs.readFileSync(wordsPath);
    const parseWordsFileContent = JSON.parse(wordsFileContent);
    return parseWordsFileContent;
}

router.get('/learning/word', (_req, res) => {
    try{
        const word = readData();
        return res.status(200).json(word); 
    }catch(err){
        return res.status(500).json({error: "File cannot be read."})
    }
});

router.get('/learning/word/:id', (req, res) => {
    const word = readData();
    const singleWord = word.find((word) => word.id === req.params.id);

    if(!singleWord){
        return res.status(404).send("Slang not found!")
    }
    res.json(singleWord);
});  

module.exports = router;
