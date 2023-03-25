
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const country = document.getElementById('country');
const selct = document.getElementById('select');
const note = document.getElementById('textarea')

// radio gagal di run 
// const gen = document.getElementsByName('gen')
// const gendd = Array.from(gen).find((radio) => radio.checked)


// checkbox  

const dform = []

form.addEventListener('submit', function(a) {
    a.preventDefault()
  
    dform.push ({
        User: firstname.value,
        Pass: lastname.value,
        Email: email.value,
        Country: country.value,
        Avail: selct.value,
        // Gender : pilihgen.value,
        texta: note.value,
    })
    
    let uString = JSON.stringify(dform)
    sessionStorage.setItem('form', uString);
   
    alert('Form completed.')
    window.location.href = 'index.html'
})


