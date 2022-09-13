var c = document.querySelector(`canvas`)

var ctx = c.getContext(`2d`)

var timer = setInterval(main, 1000/60)

var arrow = new GameObject()
arrow.x = c.width/2 - arrow.w/2
arrow.y = c.height/2 - arrow.h/2
var mouse = {x:0,y:0}

function main()
{
    arrow.move()
    arrow.draw()

    console.log(mouse.x)
    ctx.clearRect(0,0,c.width, c.height)

    c.addEventListener(`mousemove`, function(e){
        let rect = c.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    })
}