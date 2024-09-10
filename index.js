function removeTransition(e)  { // using basic function to use this keyword
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

const playSound = (e) => {
    const keysToCheck = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const pressedKey = e.key.toLowerCase()
    if (!keysToCheck.includes(pressedKey)) return
    const audio = document.createElement('audio')
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    const sound = key.querySelector('.sound').innerText.toLowerCase()
    const soundUrl = `https://github.com/nileshrawatp1/JS-Drum-kit/raw/main/sounds/${sound}.wav`;
    audio.setAttribute('src', soundUrl)
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

window.addEventListener('keydown', playSound)
const keys = Array.from(document.querySelector('.keys').children)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
