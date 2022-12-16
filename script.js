let base64String = "";



let datum = Date.now();



 document.querySelector(".submitDonut").addEventListener("click", (e)=> {

    //check if image is uploaded
    if (document.querySelector("#logo").files.length == 0) {
        alert("Please upload an image");
        return;
    }
    else {
        
function imageUpload() {
    let file = document.querySelector("#logo").files[0];
    let reader = new FileReader();
    
    reader.onload = function () {
        base64String = reader.result;
        imageBase64Stringrep = base64String;
        return imageBase64Stringrep;
    }
    reader.readAsDataURL(file);
    

}

    }

    imageUpload();


let donutDeeg = document.querySelector('#donutDeeg').value;
let donutVulling = document.querySelector('#donutVulling').value;
let donutGlazuur = document.querySelector('#donutGlazuur').value;
let donutTopping = document.querySelector('#donutTopping').value;

let bedrijfsnaam = document.querySelector('#naam').value;
let email = document.querySelector('#email').value;
let telefoonnummer = document.querySelector('#telefoon').value;
let adres = document.querySelector('#adres').value;
let huisnr = document.querySelector('#huisnr').value;
let postcode = document.querySelector('#postcode').value;
let woonplaats = document.querySelector('#woonplaats').value;
//let logo = document.querySelector('#logo').value;

console.log(imageBase64Stringrep);

let donutNaam = document.querySelector('#donutNaam').value;
//console.log(logoUrl);




//kijk of de velden ingevuld zijn
if (donutDeeg === "" || donutVulling === "" || donutGlazuur === "" || donutTopping === "" || bedrijfsnaam === "" || email === "" || telefoonnummer === "" || adres === "" || huisnr === "" || postcode === "" || woonplaats === "" || logo === "") {
   alert("Please fill in all fields");
    
}
else {

    //imageUpload();



    fetch('https://donuttelloapi.onrender.com/api/v1/donuts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
        ,
        body: JSON.stringify({
            "donutNaam": donutNaam,
            "donutDeeg": donutDeeg,
            "donutVulling": donutVulling,
            "donutGlazuur": donutGlazuur,
            "donutTopping": donutTopping,
            "bedrijfsnaam": bedrijfsnaam,
            "email": email,
            "telefoon": telefoonnummer,
            "straat": adres,
            "straatnr": huisnr,
            "postcode": postcode,
            "gemeente": woonplaats,
            "logo": base64String,
            "ready": "false",
            "hoeveelheid": "5",
            //datum now
            "datum": datum



            
            
        })
        
    }).then(response => {
        return response.json();
    }
    ).then(json => {
        if (json.status === "success") {
            let donut = `<div class="donuts">
            <img src="${json.data.donut.logo}" alt="donut">
            <h2>${json.data.donut.bedrijfsnaam}</h2>
            <p>${json.data.donut.donutDeeg}</p>
            <p>${json.data.donut.donutVulling}</p>
            <p>${json.data.donut.donutGlazuur}</p>
            <p>${json.data.donut.donutTopping}</p>
            <p>${json.data.donut.email}</p>
            <p>${json.data.donut.telefoon}</p>
            <p>${json.data.donut.straat}</p>
            <p>${json.data.donut.straatnr}</p>
            <p>${json.data.donut.postcode}</p>
            <p>${json.data.donut.gemeente}</p>
            <a>Bestel</a>
            <a>Wijzig</a>
            <a class="donut__delete" href="#" data-id="${json.data.donut._id}">Verwijder</a>
            </div>
            `
            document.querySelector(".donuts").insertAdjacentHTML("afterend", donut);

            //de donut komt in de database


        }
        else {
            alert("Donut niet toegevoegd");
        }
    }
    
    )
}
e.preventDefault();
})






            





























