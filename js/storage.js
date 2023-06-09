// storage
const formImput = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.querySelector('textarea');

const data = localStorage.getItem('formData');
const storagedData = JSON.parse(data);

if (storagedData) {
  nameInput.value = storagedData.name;
  emailInput.value = storagedData.email;
  messageInput.value = storagedData.textArea;
}

formImput.addEventListener('input', () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    textArea: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});