/*let logoString;
let logoInput = document.querySelector("#logo");
logoInput.addEventListener("change", e => {

    let logo = logoInput.files[0];
    const reader = new FileReader();


    reader.addEventListener("load", () => {
        logoString = reader.result;
        //loaclstring accessible from outside the function
        base64String = logoString;
        console.log(base64String);



    });
    reader.readAsDataURL(logo);

    console.log(base64String);


})*/

let logoUrl;
let datum = Date.now();


    






let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let reader = new FileReader();
let img = new Image();

let uploadCanvas = e =>{
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
                };
                img.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);

};
let imageeLoader = document.querySelector('#logo');
imageeLoader.addEventListener('change', uploadCanvas);







let cloudinaryAPI = "734646525192331";
let cloudName = "dq2ctla9j";
let button = document.querySelector(".submitDonut");
 button.addEventListener("click", (e) => {
let preview = canvas.toDataURL("image/png");

let formData = new FormData();
formData.append("file", preview);
formData.append("upload_preset", "eg0z27kj");
fetch("https://api.cloudinary.com/v1_1/dq2ctla9j/image/upload", {
    method: "POST",
    body: formData

})

.then(response => response.json())
.then(data => {
    let previewURL = data.secure_url;
    console.log(previewURL);

if (document.querySelector("#logo").files.length == 0) {

   


    let apiUrl = "https://donuttelloapi.onrender.com/api/v1/donuts";

    let donutDeeg = document.querySelector('#donutDeeg').value;
    let donutVulling = document.querySelector('#donutVulling').value;
    let donutGlazuur = document.querySelector('#donutGlazuur').value;
    let donutTopping = document.querySelector('#donutTopping').value;
    let donutNaam = "Donuttello";

    let bedrijfsnaam = document.querySelector('#naam').value;   
    let email = document.querySelector('#email').value;
    let telefoonnummer = document.querySelector('#telefoon').value;
    let adres = document.querySelector('#adres').value;
    let huisnr = document.querySelector('#huisnr').value;
    let postcode = document.querySelector('#postcode').value;
    let woonplaats = document.querySelector('#woonplaats').value;
    let logo = document.querySelector('#logo').value;
    console.log(donutDeeg, donutVulling, donutGlazuur, donutTopping, bedrijfsnaam, email, telefoonnummer, adres, huisnr, postcode, woonplaats, logo, datum);


    fetch (apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify({
        "donutPreview": previewURL,
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
            "logo": "",
            "ready": "false",
            "hoeveelheid": "5",
            //datum now
            "datum": datum
    })
})


    . then(response => response.json())
    .then(json=> {

        if (json.status === "success") {
            let donut = `<div class="donuts">
            <img src="${json.data.donut.donutPreview}" alt="donut">
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




    })
}

else {

let logo = document.querySelector("#logo").files[0];
let formData = new FormData();
formData.append("file", logo);
formData.append("upload_preset", "eg0z27kj");
fetch("https://api.cloudinary.com/v1_1/dq2ctla9j/image/upload", {
    method: "POST",
    body: formData

})

.then(response => response.json())
.then(data => {
    logoUrl = data.secure_url;


    let apiUrl = "https://donuttelloapi.onrender.com/api/v1/donuts";

    let donutDeeg = document.querySelector('#donutDeeg').value;
    let donutVulling = document.querySelector('#donutVulling').value;
    let donutGlazuur = document.querySelector('#donutGlazuur').value;
    let donutTopping = document.querySelector('#donutTopping').value;
    let donutNaam = "Donuttello";  

    let bedrijfsnaam = document.querySelector('#naam').value;   
    let email = document.querySelector('#email').value;
    let telefoonnummer = document.querySelector('#telefoon').value;
    let adres = document.querySelector('#adres').value;
    let huisnr = document.querySelector('#huisnr').value;
    let postcode = document.querySelector('#postcode').value;
    let woonplaats = document.querySelector('#woonplaats').value;


    fetch (apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

    body: JSON.stringify({

        "donutPreview": previewURL,
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
            "logo": logoUrl,
            "ready": "false",
            "hoeveelheid": "5",
            //datum now
            "datum": datum
    })
})
    . then(response => response.json())
    .then(json=> {

        if (json.status === "success") {
            let donut = `<div class="donuts">
            <img src="${json.data.donut.donutPreview}" alt="donut">
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




    })









    })
};



















})









e.preventDefault();



 });






/*
document.querySelector(".submitDonut").addEventListener("click", (e)=> {

    //check if image is uploaded

    //imageUpload();
//get the logostring from the imageupload function


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

console.log(base64String);

let donutNaam = document.querySelector('#donutNaam').value;
//console.log(logoUrl);




//kijk of de velden ingevuld zijn
if (donutDeeg === "" || donutVulling === "" || donutGlazuur === "" || donutTopping === "" || bedrijfsnaam === "" || email === "" || telefoonnummer === "" || adres === "" || huisnr === "" || postcode === "" || woonplaats === "" || logo === "") {
   alert("Please fill in all fields");
    
}
else {

    //imageUpload();



    fetch(/*'https://donuttelloapi.onrender.com/api/v1/donuts'*/ /*'http://localhost:3000/api/v1/donuts', {
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

*/




















