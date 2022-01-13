const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
var txt = window.document.querySelector("em#change-txt")

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        txt.innerText = 'Desativar MODO ESCURO!'
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
        txt.innerText = 'Ativar MODO ESCURO!'
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);