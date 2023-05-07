const scriptURL = 'https://script.google.com/macros/s/AKfycbzNcW0w0-OvXP-_Z1KnC-Ygfz5ajqMute7_9Hu1IuRn85bBoFyyMTl6CQf02PVQKlXv/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { 
      msg.innerHTML="Message sent successfully"
    setTimeout(function(){
      msg.innerHTML = ""
    }, 5)
    form.reset()
  })
    .catch(error => console.error('Error!', error.message))
})