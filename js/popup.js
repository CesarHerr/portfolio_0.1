const objectWorks = [
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
},
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
},
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
},
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
},
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
},
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
},
{
    id: 'card_1',
    title: 'Keeping track of hundreds  of components website',
    skills: ['HTML/CSS', 'Bootstrap', 'Ruby on Rails'],      
    img: '../images/PopupDesktop.png',    
    buttonClose: '../images/ClosePopup.svg',
    btnSeeLive: 'index.html',
    btnSeeSource: 'index.html',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
}
];

// this is for popup
const main = document.querySelector('body');
const cardPopup = document.querySelectorAll('.see-btn');

cardPopup.forEach((parameter, index) => {
    parameter.addEventListener('click', () => {
    const cards = document.createElement('div');
    cards.className = "popup-container"

    cards.innerHTML =`
    <div class="cardDesktopPopup">
        <button class="close"><img src="${objectWorks[index].buttonClose}" alt=""></button>    
        <div class="popup-header">
            <h2>${objectWorks[index].title}</h2>        
            <ul class="popup-skills">
                <li>${objectWorks[index].skills[0]}</li>
                <li>${objectWorks[index].skills[1]}</li>
                <li>${objectWorks[index].skills[2]}</li>
            </ul>
        </div>
        <img src="${objectWorks[index].img}" alt="imagen_project">
        <p>${objectWorks[index].description}</p>
        <div>
            <button class="btnSeeLive"><a href="${objectWorks[index].btnSeeLive}">See Live</a></button>
            <button class="btnSeeSource"><a href="${objectWorks[index].btnSeeSource}">See Source</button>
        </div>
    </div>`;

    main.appendChild(cards)
    const close = document.querySelector('.close')
    close.addEventListener('click',()=>{
    main.removeChild(cards)
    });
    });
});