let button = document.querySelector(".submitDonut").addEventListener("click", ()=> {

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
let logo = document.querySelector('#logo').value;

console.log(logo);

//kijk of de velden ingevuld zijn
if (donutDeeg === "" || donutVulling === "" || donutGlazuur === "" || donutTopping === "" || bedrijfsnaam === "" || email === "" || telefoonnummer === "" || adres === "" || huisnr === "" || postcode === "" || woonplaats === "" || logo === "") {
   alert("Please fill in all fields");
    
}
else {
    fetch('http://localhost:3000/api/v1/donuts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Mzg3NzBiOGU2NTNjOTY1ZDVlYThlNDQiLCJ1c2VybmFtZSI6IkRvbnV0dGVsbDAwIiwiaWF0IjoxNjY5ODIwNjAwfQ.jLsKYzKQFZQWSUJHuWIjAcLoQBYOiECqfCU5GdGjHnI"

        }
        ,
        body: JSON.stringify({
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
            "logo": logo
            
        })
        
    }).then(response => {
        return response.json();
    }
    ).then(json => {
       console.log(json);   
    }
    )
}
})



            






































