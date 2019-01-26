var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight-60;
canvas.width = window.innerWidth-20;

var c = canvas.getContext('2d');
colors = ['blue','green','red','Orange','Pink','Purple','#FF00FF','#45CE30','#1287A5','#8B78E6']
function Circle(x,y,dx,dy,radius,colors){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2)
        c.fillStyle = colors
        c.fill();
    }

    this.update = function(){
        if(this.x+radius>innerWidth||this.x-radius<0){
            this.dx = -this.dx;
        }
        if(this.y+radius>innerHeight||this.y-radius<0){
            this.dy = -this.dy;
        }
        this.x += this.dx
        this.y += this.dy
        this.draw();
    }
}

circleArray = []

for(var i=0;i<100;i++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var radius = 30;
    var dx = (Math.random() - 0.5) *5;
    var dy = (Math.random() - 0.5) *5;
    color = colors[Math.round(Math.random()*10)]
    circleArray.push(new Circle(x,y,dx,dy,radius,color))
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i=0;circleArray.length;i++){
        circleArray[i].update();
    }
}
animate()