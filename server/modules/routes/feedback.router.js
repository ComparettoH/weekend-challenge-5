const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET feedbackrouter')/
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    //object data packaged and sent from front end
    const newFeedback = req.body;
    //sql that adds feedback data to our database
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    //deconstructs newFeedback object to match/align key values to sql columns
    const queryValues = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
    ];
    pool.query(queryText, queryValues)
    .then( () => { res.sendStatus(201); })
    .catch( (error) => {
        console.log('Error completing INSERT feedback query', error);
        res.sendStatus(500);
    });
});

module.exports = router;