class Volume_range{
    constructor(){
        this.audio_file = document.getElementById("audio_file")
        this.audio_file.volume = 50/100

        this.volumerange = document.getElementById("volumerange")

        this.volumerange.addEventListener("change", ()=>{

        this.audio_file.volume = this.volumerange.value/100

        })

        this.speedrange = document.getElementById("speedrange")
        this.speedrange.playbackRate = 1

        this.speedrange.addEventListener("change", ()=>{
        this.audio_file.playbackRate = this.speedrange.value/100

        })
        
    }
}

onload = new Volume_range()