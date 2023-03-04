class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius.toFixed(2);
    }
    getColor(){
        return this.color;
    }  
   to_string() {
       return `Circle [radius=${this.radius}, color=${this.color}]`;
  }    
    getArea(){
        return (Math.PI * Math.pow(this.radius,2)).toFixed(2);
    }
    getCircum(){
        return (2*Math.PI*this.radius).toFixed(2);
    }
}  
var res = new Circle(1.0,"red"); console .log(res.getRadius(),res.getColor(),res.to_string(),res.getArea(),res.getCircum());
