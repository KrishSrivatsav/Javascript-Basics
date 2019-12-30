var vehicle=function(){
    z={"start":function(){
        console.log("start");
        },"stop":function(){
        console.log("stop");
        },"print_details":function()
        {
            w= {"weight":"150cc","model":"fz","name":"racer"}
                console.log(w.weight);
                console.log(w.model);
                console.log(w.name);
}}
    return z
}
v1=vehicle();
v1.start();
v1.stop();
v1.print_details();