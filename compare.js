var x={name:"krish",age:21};
var y={name:6,age:21};
var st1=JSON.stringify(x);
var st2=JSON.stringify(y);
if(st1==st2)
{
    console.log("age is equal" +st2);

}
    else
{
    console.log("[my test] Expected" +st1+ "but got" +st2);

}