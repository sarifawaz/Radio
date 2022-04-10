class Color{
    constructor(){


        this.DarkMode = document.getElementById("DarkMode")
        this.DarkMode.addEventListener("click", ()=>{
            this.select_color("DarkMode")
        })

        this.LightMode = document.getElementById("LightMode")
        this.LightMode.addEventListener("click", ()=>{
            this.select_color("LightMode")
        })

        this.color1 = document.getElementById("color1")
        this.color1.addEventListener("click", ()=>{
            this.select_color("color1")
        })

        this.color2 = document.getElementById("color2")
        this.color2.addEventListener("click", ()=>{
            this.select_color("color2")
        })

        this.color3 = document.getElementById("color3")
        this.color3.addEventListener("click", ()=>{
            this.select_color("color3")
        })

        this.color4 = document.getElementById("color4")
        this.color4.addEventListener("click", ()=>{
            this.select_color("color4")
        })

        if(localStorage.getItem("COLOR")==null){
        document.body.style.background = "rgb(94 94 94)"

        }
        this.select_color(localStorage.getItem("COLOR"))
    }
    select_color(color){
        if(color=="DarkMode"){
            var body = document.getElementById("body")
            var speed = document.getElementById("speed")
            var volume = document.getElementById("volume")
            var radioname = document.getElementById("radioname")
            var title = document.getElementById("title")
            title.style.color = "white"
            radioname.style.color = "white"
            speed.style.color = "white"
            volume.style.color = "white"
            body.style.background = "linear-gradient(45deg, black, #0000008a)"
        }
        else if(color=="LightMode"){
            var body = document.getElementById("body")
            var speed = document.getElementById("speed")
            var volume = document.getElementById("volume")
            var radioname = document.getElementById("radioname")
            var title = document.getElementById("title")
            title.style.color = "black"
            radioname.style.color = "black"
            speed.style.color = "black"
            volume.style.color = "black"
            body.style.background = "linear-gradient(45deg, white, #0000006b)"
        }
        else if(color=="color1"){
            var body = document.getElementById("body")
            var speed = document.getElementById("speed")
            var volume = document.getElementById("volume")
            var radioname = document.getElementById("radioname")
            var title = document.getElementById("title")
            title.style.color = "black"
            radioname.style.color = "black"
            speed.style.color = "black"
            volume.style.color = "black"
            body.style.background = "linear-gradient(45deg, #2ec7b2, #132614)"
        }
        else if(color=="color2"){
            var body = document.getElementById("body")
            var speed = document.getElementById("speed")
            var volume = document.getElementById("volume")
            var radioname = document.getElementById("radioname")
            var title = document.getElementById("title")
            title.style.color = "black"
            radioname.style.color = "black"
            speed.style.color = "black"
            volume.style.color = "black"
            body.style.background = "rgb(179 74 74)"
        }
        else if(color=="color3"){
            var body = document.getElementById("body")
            var speed = document.getElementById("speed")
            var volume = document.getElementById("volume")
            var radioname = document.getElementById("radioname")
            var title = document.getElementById("title")
            title.style.color = "black"
            radioname.style.color = "black"
            speed.style.color = "black"
            volume.style.color = "black"
            body.style.background = "rgb(98 133 92)"
        }
        else if(color=="color4"){
            var body = document.getElementById("body")
            var speed = document.getElementById("speed")
            var volume = document.getElementById("volume")
            var radioname = document.getElementById("radioname")
            var title = document.getElementById("title")
            title.style.color = "black"
            radioname.style.color = "black"
            speed.style.color = "black"
            volume.style.color = "black"
            body.style.background = "rgb(92 95 133)"
        }

        localStorage.setItem("COLOR", color)
    }
}

onload = new Color()
