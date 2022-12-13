const Donut = require('../../../models/Donuts');
//upload image
  


let create = (req, res, next) => {

    let donut = new Donut();
    donut.donutNaam = req.body.donutNaam;
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
    //donutlogo wordt opgeslagen in de database en naar uploads gestuurd
    //donut.logo = req.file.filename;
    donut.logo = req.body.logo;
    donut.ready = false;
    donut.hoeveelheid = req.body.hoeveelheid;
    

-
    donut.save((err,doc) => {

        if(!err) {
        res.json({

            "status": "success",
            "data": {
                "donut": doc
            }
        })
        console.log(doc);
    }
    else {
        res.json({
            "status": "error",
            "message": err
        })
    }
    })


   
    }

let getAll = (req, res) => {

    Donut.find((err, docs) => {

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

let getOne = (req, res) => {
    //get the donut with th id
    Donut.findById(req.params.id, (err, doc) => {

        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donut": doc

                }
            })
        }
    })

}

//delete donut
//only when logged in

let deleteOne = (req, res) => {

    Donut.findByIdAndRemove(req.params.id, (err, doc) => {

        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "donut": doc
                }
                ,
                "message": "Donut is succesvol verwijderd"
            })
        }
    })
}

let updateStatus = (req, res) => {

    let user = req.user.id;
    let donutId = req.params.id;

    Donut.findOneAndUpdate({

        user: user,
        _id: donutId
    },
    {
        ready: req.body.ready
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.json(err);
    });
}





    module.exports.create = create;
    module.exports.getAll = getAll;
    module.exports.getOne = getOne;
    module.exports.deleteOne = deleteOne;
    module.exports.updateStatus = updateStatus;