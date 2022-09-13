var c = document.querySelector(`canvas`)

var ctx = c.getContext(`2d`)

var ground = new GameObject()
ground.color = 'green'
ground.w = c.width
ground.h = 100
ground.x = c.width/2
ground.y = c.height - c.w/2

var dude = new GameObject()
dude.color='indianred'
dude.vx = 1

var timer = setInterval(main, 1000/60)

function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    ground.draw()
    dude.move()
    dude.draw()

    if(keys[' ']/* && dude.canJump*/){
        dude.vy = -10
        dude.canJump = false
    }

    dude.vy += 1
    dude.move()
}

