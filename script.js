class Player{
    constructor(){
        var mainheight = document.getElementById("player")
        mainheight.style.height = screen.height + "px"

        if(screen.width<620){
            mainheight.style.width = screen.width + "px"
        }

        var content = document.getElementById("content")
        content.style.height = screen.height-300 + "px"
    }

}
onload = new Player()

class Audiofile{
    constructor(){
        this.audio_file = document.getElementById("audio_file")
        this.title = document.getElementById("title")

        this.isplayed;

        this.play = document.getElementById("play")
        this.play.addEventListener("click", ()=> {
            this.playbutton()
        })

 
        this.radionames = []
        this.radionames[0] = "Sham FM" 
        this.radionames[1] = "Al Madina FM"
        this.radionames[2] = "Fuse Fm"
        this.radionames[3] = "Ninar FM"
        this.radionames[4] = "Al Madina FM"
        this.radionames[5] = "Radio Shabab"
        this.radionames[6] = "Mix FM Syria"
        this.radionames[7] = "Melody FM"
        this.radionames[8] = "ARABESQUE FM"
        this.radionames[9] = "Radio Dimshq"

        
        this.radiosource = []
        this.radiosource[0] = "https://radioshamfm.grtvstream.com:8400/stream?type=http&nocache=1608"
        this.radiosource[1] = "https://stream.almadinafm.com/;stream.mp3"
        this.radiosource[2] = "http://192.99.17.12:4986/;stream.mp3"
        this.radiosource[3] = "http://ninarfm.grtvstream.com:8896/;"
        this.radiosource[4] = "https://stream.almadinafm.com/;stream.mp3"
        this.radiosource[5] = "http://radioliveb.rtv.gov.sy:8002/RadioShabab"
        this.radiosource[6] = "https://stream.mixfmsyria.net/;stream.mp3"
        this.radiosource[7] = "http://streaming.inet.sy:8000/melodyfm"
        this.radiosource[8] = "http://185.4.87.79:8000/stream.mp3"
        this.radiosource[9] = "http://radioliveb.rtv.gov.sy:8002/RadioDimshq"

        this.server = 0;
        this.setresource()


        document.getElementById("next").addEventListener("click", ()=>{
            if(this.server<this.radiosource.length -1){
                ++this.server

                this.isplayed = false
            }else{
                this.server = 0
            }

            localStorage.setItem("saveposition", this.server)
            this.setresource()
        })

        document.getElementById("back").addEventListener("click", ()=>{
            if(this.server>0){
                --this.server
                this.isplayed = false
            }else{
                this.server = this.radiosource.length -1
            }
            localStorage.setItem("saveposition", this.server)
            this.setresource()

        })


    }

    // method here

    setresource(){
        if(localStorage.getItem("saveposition")!=null){
            this.server = localStorage.getItem("saveposition")
        }
        this.audio_file.src = this.radiosource[this.server]
        this.title.innerHTML = this.radionames[this.server]
        this.playbutton()
    }



    playbutton(){
        if(this.isplayed == false){
            this.play.src = "./img/pause.png"
            this.audio_file.play()
            this.isplayed = true
            
        }else{
            this.play.src = "./img/play.png"
            this.audio_file.pause()
            this.isplayed = false
        }
    }
}

onload = new Audiofile()