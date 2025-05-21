document.getElementById('mainGameLogo').addEventListener('click', () => {
    window.location.href = './mainGame/index.html'
})

for(let i = 1; i <= 4; i++){
    document.getElementById(`gameLogo${i}`).addEventListener('click', () => {
        window.location.href = `./miniGame${i}/index.html`
    })
}

document.getElementById('logo').addEventListener('click', () => {
    window.location.href = '#'
})
