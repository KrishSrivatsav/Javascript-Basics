a=['a','b','c','d']
b=[1,200,10,20,5]
a.sort()
b.sort(f1)
console.log(a);
console.log(b);

function f1(a,b)
{
    if(a>b)
    {
        return 1
    }
    else
    {
        return -1
    }    
    }
f1(a);