const user = document.getElementById('username')
const pass = document.getElementById('password')
const datauser = []

    form.addEventListener('submit', function (a) {
        a.preventDefault()

        datauser.push ({

            User: user.value,
            Pass: pass.value
        })

    // Ubah ke String
    let ubahString = JSON.stringify(datauser)
    localStorage.setItem('user', ubahString)

    alert('Signup Completed')
    window.location.href = 'ss.html'
})