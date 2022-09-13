function GameObject()
{
    this.x = 100
    this.y = 100
    this.w = 100
    this.h = 100
    this.vx = 5
    this.vy = 0
    this.color = 'darkblue'

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

    this.top = function(){
        return {x:this.x, y:this.y - this.h/2}
    }

    this.bottom = function(){
        return {x:this.x, y:this.y + this.h/2}
    }

    this.left = function(){
        return {x:this.x - this.w/2, y:this.y}
    }
    
    this.right = function(){
        return {x:this.x + this.w/2, y:this.y}
    }

    this.overbox = function(obj)
    {
        if(this.right() > obj.left().x &&
        this.left() < obj.right().x &&
        this.bottom() > obj.top().y &&
        this.top() < obj.bottom().y){
            return true
        }
        else{
            return false
        }
    }

    this.overpoint = function(obj)
    {
        if(this.right().x > obj.x &&
        this.left().x < obj.x&&
        this.bottom().y > obj.y&&
        this.top().y < obj.y){
            return true
        }
        else{
            return false
        }
    }
}