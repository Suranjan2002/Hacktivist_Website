const button = document.getElementById('login')
button.addEventListener('click', () => {
   
    user = {
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }

    let fetchRes = fetch(url = "https://hacktivistsapi.herokuapp.com/user/authenticate", options);
    fetchRes.then(res => res.json()).then(d => {
        console.log(d)
        alert(d.msg)
        
    })
})

