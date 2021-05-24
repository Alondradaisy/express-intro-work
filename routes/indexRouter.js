const express = require("express");
const router = express.Router();
const uuidv4 = require('uuid').v4;

router.get('/', function(req, res) {
    res.render('index', {
        user: "daisy.warren",
        facts: [{"I currently call CA home"}, {"I love spending time cooking, dancing, reading and immersing myself in nature"}, {"I love making monthly Spotify music playlists."}],
    });
    res.send('facts about me');
    res.json({
        facts,
    });
});