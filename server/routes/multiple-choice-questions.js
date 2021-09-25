const express = require('express');
const router = express.Router();
const fs = require('fs');

const questionsPath = "./data/multiplechoice.json";

const readData = () => {
    const questionsfileContent = fs.readFileSync(questionsPath);
    const parseQuestionsFileContent = JSON.parse(questionsfileContent);
    return parseQuestionsFileContent;
}

router.get('/game/multiplechoice', (_req, res) => {
    try{
        const questions = readData();
        return res.status(200).json(questions); 
    }catch(err){
        console.log(err);
        return res.status(500).json({error: "File cannot be read."})
    }
});    

module.exports = router;