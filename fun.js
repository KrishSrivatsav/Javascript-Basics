var player=function()
{
     f={"name":function(a){
hai=a
return a;
},"weapontype":function(b){
rish=b
if(b>=1 && b<=4){

return rish;
}
else{
return -1;
}
},"medkit":function(c){
kish=c
if(c<=100){

return kish;
}
},"level":function(d){
ore=d
if (d>=1 && d<=5){
return ore;
}
else{
return -1;
}
},"shoot":function(e){
     console.log("shoot with weapon",f.weapontype(rish))
},"health":function(y){
console.log("My health is at",f.medkit(kish))
},"levele":function(j){
console.log(f.name(hai),"is at level",f.level(ore))
}
    }
return f
}
p1=player();
p1.name("hari");
p1.weapontype(3)
p1.medkit(67)
p1.level(3)
p1.shoot()
p1.health()
p1.levele()
