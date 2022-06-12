btn = document.getElementById('submit')

btn.addEventListener('click', () => {

    n = document.getElementById('name').value
    u = document.getElementById('username').value
    e = document.getElementById('email').value
    p = document.getElementById('password').value

    user = {
        "name" : n,
        "username" : u,
        "email" : e,
        "password" : p
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }

    let fetchRes = fetch(url = "https://hacktivistsapi.herokuapp.com/user/createuser", options);
    fetchRes.then(res => res.json())
        .then(d => {
            console.log(d)
            
            if(d.msg == "An account with same email is present")
            {
                alert("An account with same email is present");
            }
            else
            {
                alert("SignUp Completed")
                location.replace('./login.html')
            }
        })
})