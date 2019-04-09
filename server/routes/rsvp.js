let express = require('express');
let router = express.Router();
let RSVPCollection = require('../models/RSVPSchema');

/*
    ENDPOINT IMPLEMENTATION OF A SIMPLE RSVP WEB SERVICE
 */
// Return the list of all the current RSVPs
router.get('/list', function (req, res, next) {
    console.log(`LIST RSVPS`);
    RSVPCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// endpoint that created some dummy data //
router.get("/createDD/:person/:going", (request, response) => {
    RSVPCollection.create(
        {
            rsvp_person:request.params.person,
            rsvp_going:request.params.going,
        }, (errors, results) => {
            if(errors)
            {
                response.send(errors)
            }
            else
            {
                response.send(results)
            }
        })
});

// Get a specific RSVP
router.get('/:id', function (req, res, next) {
    console.log(`LIST RSVP ${req.params.id}`);
    RSVPCollection.find({_id: req.params.id}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })

});

// Update an existing RSVP
router.put('/:id', function (req, res, next) {
    console.log(`UPDATE RSVP ${req.body.rsvp_person} ${req.body.rsvp_going}`);
    RSVPCollection.findOneAndUpdate({_id: req.params.id}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// Delete a specific RSVP -IMPLEMENT YOUR OWN FUNCTION
router.delete('/delete/:id',(request, response) => {
    RSVPCollection.deleteOne({_id:request.params.id}, (errors, results) => {
        if(errors)
        {
            response.send(errors)
        }
        else
        {
            response.send(results)
        }
    })
});

//Create a new RSVP -IMPLEMENT YOUR OWN FUNCTION
router.post('/create',(request, response) =>{
    RSVPCollection.create(request.body, (errors, results) => {
        if(errors)
        {
            response.send(errors)
        }
        else
        {
            response.send(results)
        }
    })
});

module.exports = router;
