const Donut = require('../../../models/Donuts');
//const cloudinary = require('../../../utils/cloudinary');


//upload image
  


let create =  async (req, res, next) => {
  

    let donut = new Donut();
    donut.donutPreview = req.body.donutPreview;
    donut.donutNaam = req.body.donutNaam;
    donut.bedrijfsnaam = req.body.bedrijfsnaam;
    donut.straat = req.body.straat;
    donut.straatnr = req.body.straatnr;
    donut.postcode = req.body.postcode;
    donut.gemeente = req.body.gemeente;
    donut.telefoon = req.body.telefoon;
    donut.email = req.body.email;
    donut.donutTopping = req.body.donutTopping;
    donut.donutGlazuur = req.body.donutGlazuur;
    //donutlogo wordt opgeslagen in de database en naar uploads gestuurd
    //donut.logo = req.file.filename;
    //gebruik cloudinary en sla de url op in variabele logo en voeg deze toe aan de database
    //const result = await cloudinary.uploader.upload(req.file.path);
    donut.logo = req.body.logo;
    //donut.logo = req.body.logo;
    donut.ready = false;
    donut.hoeveelheid = req.body.hoeveelheid;
    donut.datum = req.datum;

    
    

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
/*
let createDonut = (req, res) => {

    const {donutNaam, bedrijfsnaam, straat, straatnr, postcode, gemeente, telefoon, email, donutDeeg, donutVulling, donutTopping, donutGlazuur, logo, ready, hoeveelheid, datum} = req.body;

    try {
        const result = cloudinary.uploader.upload(logo, {
            folder: "logo",
            width: 300,
            crop: "scale"
        }
        )
    const donut =  Donut.create({

        donutNaam,
        bedrijfsnaam,
        straat,
        straatnr,
        postcode,
        gemeente,
        telefoon,
        email,
        donutDeeg,
        donutVulling,
        donutTopping,
        donutGlazuur,
        logo: {
            public_id: result.public_id,
            url: result.secure_url

        },
        ready,
        hoeveelheid,
        datum
        

    })
    res.json({
        "status": "success",
        "data": {
            "donut": donut
        }

    })


}
catch(err) {
    res.json({
        "status": "error",
        "message": err
    })
}



}

*/




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
        res.json({
            "status": "success",
            "data": {
                "donut": doc
            }
                



        });


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
    //module.exports.createDonut = createDonut;
