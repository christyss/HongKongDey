const express = require('express');
const router = express.Router();
const fs = require('fs');

const slangPath = "./data/slang.json";

const readData = () => {
    const slangFileContent = fs.readFileSync(slangPath);
    const parseSlangFileContent = JSON.parse(slangFileContent);
    return parseSlangFileContent;
}

router.get('/learning/slang', (_req, res) => {
    try{
        const slang = readData();
        return res.status(200).json(slang); 
    }catch(err){
        return res.status(500).json({error: "File cannot be read."})
    }
}); 

router.get('/learning/slang/:id', (req, res) => {
    const slang = readData();
    const singleSlang = slang.find((slang) => slang.id === req.params.id);

    if(!singleSlang){
        return res.status(404).send("Slang not found!")
    }
    res.json(singleSlang);
});  

module.exports = router;