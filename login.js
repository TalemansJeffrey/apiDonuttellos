let btnLogin= document.querySelector(".login button").addEventListener("click", ()=> {

    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    //check eerst of de username en password niet leeg zijn
    if (username === "" || password === "") {
        let feedback = document.querySelector(".alert");
        feedback.textContent = "Please fill in all fields";
        feedback.classList.remove('hidden');
        return;
    }
    else {
        fetch('https://donuttelloapi.onrender.com/users/login', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(response => {
            return response.json();
        }
        ).then(json => {
            if (json.status === "success") {
                let feedback = document.querySelector(".alert");
                feedback.textContent = "You have logged in successfully";
                feedback.classList.remove('hidden');

                let token = json.data.token;
                localStorage.setItem('token', token);
                window.location.href = "index.html";

                //display the username and password in the input fields
               
            }
            else {
                let feedback = document.querySelector(".alert");
                feedback.textContent = "Login failed";
                feedback.classList.remove('hidden');
            }
        }
        )

        
        
    }















})