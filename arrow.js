var b=(x,y)=>
{
    var sum=0;
    for(i=0;i<x;i=i+2)
    {
        for(j=0;j<y;j=i+2)

    {
    if((j%2)==1)
    {
        sum+=1;
        
    }
     else
        {
        sum+=2;
        
        }
    }
    }
    return sum;
}
console.log(b(2,3));
console.log(b(4,2));
        
        