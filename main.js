// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.querySelectorAll('.like');
// Your JavaScript code goes here!

function like(e) {
  const heart = e.target;
  mimicServerCall ('theUrl')
  .then(function(serverMessage){
    heart.innerText = glyphState[heart.innerText];
    heart.style.color = colorState[heart.style.color];
  })
  
<<<<<<< HEAD
  .catch (function(error) {
    document.getElementById('modal').className = "";
  });
}
 for (const gly of hearts) {
   glyp.addEventListner("click", likecallback);
 }
=======
  
}

>>>>>>> 72f232886f5103ce0441130f87839cd3af350b8f




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
