let ambil = localStorage.getItem('user')
let objuser = JSON.parse(ambil)
const user = objuser.map(i => i.User)

const result = document.getElementById('tampil')
result.innerHTML = user