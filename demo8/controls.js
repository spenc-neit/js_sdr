var keys = {}

window.addEventListener(`keydown`, press)
function press(e){
    keys[String.fromCharCode(e.keyCode)] = true
    
}

window.addEventListener(`keyup`, release)
function release(e){
    keys[String.fromCharCode(e.keyCode)] = false
    
}

