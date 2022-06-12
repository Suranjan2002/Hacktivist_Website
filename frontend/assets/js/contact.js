const button = document.getElementById('contact_us')
button.addEventListener('click', () =>{
    n = document.getElementById('name').value
    e = document.getElementById('email').value
    s = document.getElementById('subject').value
    m = document.getElementById('message').value
    
    contact_content = {
        "name" : n,
        "email" : e,
        "subject" : s,
        "message" : m
    }
    console.log(contact_content)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(contact_content)
    }
    let fetchRes = fetch(url = "https://hacktivistsapi.herokuapp.com/contact/contact_us", options);
    fetchRes.then(res => res.json()).then(d => {
        console.log(d)
        alert(d.msg)
        location.reload()
    })
})