"use strict";
const pi=3.1416;
function Circle(){
    _this=this;
    this.radius=0;
    this.getCircumferance = () => 2*pi*_this.radius;
    this.getArea = () => pi*_this.radius*_this.radius;
};
module.exports = {
    pi:pi,
    Circle:Circle
}