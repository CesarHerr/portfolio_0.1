// storage
const formInput = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.querySelector('textarea');

const data = localStorage.getItem('formData');
const storedData = JSON.parse(data);

if (storedData) {
  nameInput.value = storedData.name;
  emailInput.value = storedData.email;
  messageInput.value = storedData.textArea;
}

formInput.addEventListener('input', () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    textArea: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});