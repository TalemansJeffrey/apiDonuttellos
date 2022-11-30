//Als er op de submit button wordt geklikt, wordt de functie createDonut aangeroepen
document.querySelector(".submit").addEventListener("click", ()=> {

    let bedrijfsnaam = document.querySelector('#bedrijfsnaam').value;
    let straat = document.querySelector('#straat').value;
    let straatnr = document.querySelector('#straatnr').value;
    let postcode = document.querySelector('#postcode').value;
    let gemeente = document.querySelector('#gemeente').value;
    let telefoon = document.querySelector('#telefoon').value;
    let email = document.querySelector('#email').value;

    //krijg de waarde van dropdown menu
    let donutDeeg = document.querySelector('#donutDeeg').value;
    let donutVulling = document.querySelector('#donutVulling').value;
    let donutTopping = document.querySelector('#donutTopping').value;
    let donutGlazuur = document.querySelector('#donutGarnituur').value;
    let logo = document.querySelector('.logo').value;

    
    






//check of alle velden zijn ingevuld
    if (bedrijfsnaam === "" || straat === "" || straatnr === "" || postcode === "" || gemeente === "" || telefoon === "" || email === "" || donutDeeg === "" || donutVulling === "" || donutTopping === "" || donutGlazuur === "" || logo === "") {
        let feedback = document.querySelector(".alert");
        feedback.textContent = "Please fill in all fields";
        feedback.classList.remove('hidden');
        return;
    }
    else {

        //als ze allemaal zijn ingevuld dan wordt er een fetch request gedaan
        fetch('http://localhost:3000/api/v1/donuts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "bedrijfsnaam": bedrijfsnaam,
                "straat": straat,
                "straatnr": straatnr,
                "postcode": postcode,
                "gemeente": gemeente,
                "telefoon": telefoon,
                "email": email,
                "donutDeeg": donutDeeg,
                "donutVulling": donutVulling,
                "donutTopping": donutTopping,
                "donutGlazuur": donutGlazuur,
                "logo": logo
            })
        }).then(response => {
            return response.json();
        }
        ).then(json => {
            if (json.status === "success") {
                let feedback = document.querySelector(".alert");
                feedback.textContent = "Your donut has been created";
                feedback.classList.remove('hidden');
            }
            else {
                let feedback = document.querySelector(".alert");
                feedback.textContent = "Something went wrong";
                feedback.classList.remove('hidden');
            }
        }) . catch(error => {
            console.log(error);

        })

    }


e.preventDefault();

});
