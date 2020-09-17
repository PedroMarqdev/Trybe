
const DarkButton = document.querySelector('#darkMode');
const background = document.body
const fontSize = document.querySelector('.fontSize')

updateMode()

DarkButton.addEventListener('click', function (){
    if(localStorage.textColor === 'white' && localStorage.backColor === 'black'){
    localStorage.setItem('textColor', 'black')
    localStorage.setItem('backColor', 'white')
        updateMode()
    }
    else{
    localStorage.setItem('textColor', 'white')
    localStorage.setItem('backColor', 'black')
        updateMode()
    }
})

function updateMode (){
    background.style.backgroundColor = localStorage.getItem('backColor')
    background.style.color = localStorage.getItem('textColor')
}

