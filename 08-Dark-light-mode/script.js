const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
const containedDarkMode = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container');

fullDarkModeCheckbox.addEventListener('change',(e) =>{
    if(fullDarkModeCheckbox.checked){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }

    containedDarkMode.checked = fullDarkModeCheckbox.checked
    changeContainerDarkMode()
})

containedDarkMode.addEventListener('change', changeContainerDarkMode)

function changeContainerDarkMode(){
    if(containedDarkMode.checked){
        container.classList.add('dark')
    }else{
        container.classList.remove('dark')
    }       
}


