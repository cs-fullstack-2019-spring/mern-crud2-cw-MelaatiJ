const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Simple model for an RSVP
const RSVPSchema = new Schema(
    {
        rsvp_person: String,
        rsvp_going: Boolean,
    }
);

module.exports = mongoose.model('rsvp',RSVPSchema);