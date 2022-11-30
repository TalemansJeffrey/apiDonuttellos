const Donut = require('../../../models/Donuts');

let create = (req, res, next) => {

    let donut = new Donut();
    donut.bedrijfsnaam = req.body.bedrijfsnaam;
    donut.straat = req.body.straat;
    donut.straatnr = req.body.straatnr;
    donut.postcode = req.body.postcode;
    donut.gemeente = req.body.gemeente;
    donut.telefoon = req.body.telefoon;
    donut.email = req.body.email;
    donut.donutDeeg = req.body.donutDeeg;
    donut.donutVulling = req.body.donutVulling;
    donut.donutTopping = req.body.donutTopping;
    donut.donutGlazuur = req.body.donutGlazuur;
    donut.logo = req.body.logo;

    console.log(donut);

    donut.save((err,doc) => {


        if(!err) {
        res.json({

            "status": "success",
            "data": {
                "donut": doc
            }
        })
    }
    else {
        res.json({
            "status": "error",
            "message": "Kon de donut niet opslaan"
        })
    }
    })


   
    }

let getAll = (req, res) => {

    Donut.find({"bedrijfsnaam": "CheffrenDesigns"}, (err, docs) => {

        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "donut": docs
                }
            })
        }
    })
    }

    module.exports.create = create;
    module.exports.getAll = getAll;