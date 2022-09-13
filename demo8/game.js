var c = document.querySelector(`canvas`)

var ctx = c.getContext(`2d`)

function GameObject()
{
    this.x = 100
    this.y = 100
    this.w = 100
    this.h = 100
    this.vx = 5
    this.vy = 0
    this.color = 'darkblue'
    this.canJump = false

    this.move = function(){
        this.x += this.vx
        this.y += this.vy
    }

    this.draw = function(){
        ctx.fillRect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = this.color
    }

    this.change = function(){
        this.w += .5
        this.h += .5
    }
}

var box = []
var amt = 50   

for(let i=0; i<amt; i++){
    box[i] = new GameObject();
    box[i].x = rand(0, c.width)
    box[i].y = rand(0, c.height)
    box[i].w = rand(25,50)
    box[i].h = box[i].w
    box[i].vx = 0
    box[i].vy = box[i].w * .5
    box[i].color = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`
}

var box1 = new GameObject();
var box2 = new GameObject();

var timer = setInterval(main, 1000/60)

function main()
{
    ctx.clearRect(0,0,c.width,c.height)

    for(let i=0; i<box.length; i++){
        box[i].move();
        box[i].draw();
        if(box[i].y > c.height){
            box[i].y = -box[i].h
        }
        if (box[i].x > c.width){
            box[i].x = -box[i].w
            
        }
    }
    
    
    
    box1.draw()

    box1.move()

    if (box1.x > c.width){
        box1.x = -box1.w
        
    }

    if (box1.x > c.width - box1.h){
        console.log(box1.vx)
        box1.vx = -box1.vx
        console.log(box1.vx)
    }

    if (box1.x < 0){
        box1.x = -box1.x
        box1.vx = -box1.vx
    }
}

function rand(_low, _high){
    return Math.random() * (_high-_low) + _low
}
