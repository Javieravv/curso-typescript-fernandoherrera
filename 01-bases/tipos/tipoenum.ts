/**Tipo de datos enum */

(() => {

    enum AudioLevel {
        min=1,
        medium,
        medium1,
        max=100
    }

    let currentAudio:AudioLevel = AudioLevel.max

    console.log( currentAudio)
    console.log ( AudioLevel )
})()