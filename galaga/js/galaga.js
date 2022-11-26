let canvas = document.getElementById("board");
let context = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

class Element{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    setCoord(x, y){
        this.x = x;
        this.y = y;
    }
    draw(){}
}

class ship extends Element{
    constructor(x, y, imgsrc, width, height){
        super(x, y);
        this.img = new Image();
        this.img.src = imgsrc;
        this.width = width;
        this.height = height;
        this.img.onload = this.draw();
    }
    draw(){
        console.dir(this.img);
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

let player = new ship(width/2 - 25, height-100, "https://www.pngmart.com/files/22/Galaga-PNG-Free-Download.png", 50, 50);