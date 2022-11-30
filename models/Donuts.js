//alle logica van schema's en models
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donuttelloSchema = new Schema({
    bedrijfsnaam: {type: String, required: true},
    straat: {type: String, required: true},
    straatnr: {type: Number, required: true},
    postcode: {type: Number, required: true, minlength: 4, maxlength: 4, validate: { validator: Number.isInteger, message: '{VALUE} is not an integer value' } },
    gemeente: {type: String, required: true },
    telefoon: {type: Number, allowed : [/^[0-9]{9}$/]},
    email: {type: String, required: true},
    donutDeeg : {type: String, required: true},
    donutVulling : {type: String , required: true},
    donutTopping : {type: String , required: true},
    donutGlazuur : {type: String , required: true},
    logo : {type: String  /*contains jpg, png, gif */ , allowed : [/\.jpg$/, /\.png$/, /\.gif$/], required: true}


});

const Donut = mongoose.model('Donut', donuttelloSchema);

module.exports = Donut;