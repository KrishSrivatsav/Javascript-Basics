z=[]
function krish(b){
for(i=0;i<b.length;i++){
if(b[i]<30){
b[i]=b[i]+30;

}z.push(b[i])
}
for(i=0;i<b.length;i++){
if(b[i]<10){
b[i]="D"
}
if(b[i]>=10 && b[i]<30){
b[i]="c"
}
if(b[i]>=30 && b[i]<60){
   b[i]="B"
}
if(b[i]>=60 && b[i]<=90){
b[i]="A"
}
}
console.log(z)
console.log(b)
b=b.filter(w=>w=="A"||w=="B")
console.log(b)
}
krish([10,20,45,67,87,9]);



