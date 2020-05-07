const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')


messageOne.textContent = 'Loading...'
fetch('/contact-detail').then((response) =>{
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }
        else{          
            messageOne.textContent = 'Number: '+data.body.data.contacts.primary.number
            messageTwo.textContent = 'Email : '+data.body.data.contacts.primary.email
            messageThree.textContent = 'Twitter : '+data.body.data.contacts.primary.twitter
            messageFour.textContent = 'Facebook : '+data.body.data.contacts.primary.facebook
            messageFive.textContent = 'Media : '+data.body.data.contacts.primary.media[0]
        }
    })
})