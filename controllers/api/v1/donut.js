let create = (req, res) => {

    res.json({

        "status": "success",
        "data": {
            "donut": "successfully created"
        }
    })
    }

let getAll = (req, res) => {

    res.json({

        "status": "success",
        "data": {
            "donut": "successfully retrieved"
        }
    })
    }

    module.exports.create = create;
    module.exports.getAll = getAll;