let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')
let s = 0
let min = 0
let hour = 0
let s2;
let min2;
let hour2;
let paused = false
let reseted = false
let startDelimiter = 0
div1.innerHTML = `<p id="pid1">00:00:00</p>`

/*setInterval(func, time) */
start.addEventListener('click', () => {
    paused = false
    reseted = false
    if (startDelimiter < 1) {
        setInterval(contag, 1000)
        startDelimiter += 1
    }
})

pause.addEventListener('click', () => {
    paused = true
})

reset.addEventListener('click', () => {
    reseted = true
    s = 0
    min = 0
    hour = 0
    if (paused == true) {
        div1.innerHTML = `<p id="pid1">00:00:00</p>`
    }
})
/*Eu sei async e await :)*/
async function contag() {
    if (paused == false) {
        s += 1
        s2 = confs()
        if (s >= 60) {
            s = 0
            s2 = 0
            min += 1
        }
        min2 = confmin()
        if (min >= 60) {
            min = 0
            min2 = 0
            hour += 1
        }
        hour2 = confhour()
        console.log(s)
        console.log(s2)
        div1.innerHTML = `<p id="pid1">${hour2}:${min2}:${s2}</p>`
    }
}
function confs() {
    if (s < 10) {
        return `0${s}`
    }
    else{
        return s
    }
}
function confmin() {
    if (min < 10) {
        return `0${min}`
    }
    else {
        return min
    }
}
function confhour() {
    if (hour < 10) {
        return `0${hour}`
    }
    else {
        return hour
    }
}