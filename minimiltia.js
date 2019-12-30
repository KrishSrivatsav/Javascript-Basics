var player=function()
{
g = {"name":function(n){
        return n;
},"weapon":function(w){
    w1=w
    if(w>=1 && w<=4)
    {
        return w;
    }
    else{
        return "Noarmour";
   }
},"medkit":function(m){
    m1=m
    if(m>=0 && m<=100){
        return m
    }
    else{
        return "nokit"
    }
},"setlevel":function(l){
    l1=l
    if(l>=1 && l<=5){
        return l;
    }
    else{
        return "failed"
    }
},"shoot":function(){
    console.log("shoot with",this.weapon(w1));
},"level":function(){
    console.log(g.name()+"in at level"this.setlevel(l1));
} 
}
return g;
}
p1=player();
p1.name("krish");
p1.weapon(1);
p1.medkit(80);
p1.setlevel(3);
p1.shoot();
p1.level();
