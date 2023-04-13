const formValidator = document.getElementById('form');
const emailValidator = document.getElementById('email');
const error= document.querySelector('.menssage-error')
const errorMessage = document.createElement('div');
errorMessage.classList.add('message');

formValidator.addEventListener("submit", (event) => {  
 
    if ((/[A-Z]/).test(emailValidator.value)) {
      event.preventDefault(); 
      
      errorMessage.innerHTML =`
      <div class="triangle"></div>
      <span>Please use only lowercase letters in your email address </span>`;
    
        error.appendChild(errorMessage);
      } 
  
});

emailValidator.addEventListener('click', () => {
    error.removeChild(errorMessage);

})