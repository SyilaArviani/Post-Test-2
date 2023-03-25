const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener("submit", function(a){
    a.preventDefault()
    
    let ambil = localStorage.getItem('user')
    let objuser = JSON.parse(ambil)

    const loc_user = objuser.map(i => i.User)
    const loc_pass = objuser.map(i => i.Pass)

    if(username.value ==  loc_user && password.value == loc_pass){
        alert('Login succesful')
        window.location.href = 'index.html'
    } else{
        alert('Login not succesful')
    }
})