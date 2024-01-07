const sounds=['applause','boo' , 'gasp','tada','victory','wrong']

// this js for how to create button
sounds.forEach(sound =>{
    const btn=document.createElement('button')

    btn.classList.add('btn')

    btn.innerText=sound

    // how to create sound play & sound stop 
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}