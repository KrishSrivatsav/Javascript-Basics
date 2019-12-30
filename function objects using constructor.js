
//Fuction objects using constructor

var krish = {
    name:"krish",
    dob:1997,
    job:"pythondeveloper"
};
console.log(krish);
//creating a function constuctor
var Wrestler = function (name,dob,job) {
    this.name=name;
    this.dob=dob;
    this.job=job;
}

Wrestler.prototype.calculateage =
function()
{
    console.log(2010-this.dob);    
}
Wrestler.prototype.skill="fun";
var krish = new Wrestler('krish',1997,'pythondeveloper');

krish.calculateage();

var pasu = new Wrestler('pasu',1996,'coder');

var vel = new Wrestler('vel',1962,'maranacoder');

vel.calculateage();
krish.calculateage();
pasu.calculateage();


console.log(krish.skill);
console.log(vel.skill);
console.log(pasu.skill);


function fn(){
console.log(this.skill);

}

console.log("before call");
s = {

    somevalue: 90
}

function fn2(ee){
    console.log(this.somevalue+10+ee);
    
    }
    
fn2.call(s,30);
fn.call(krish);
fn.apply(krish);

dd = fn.bind(krish);
dd();
//fn();