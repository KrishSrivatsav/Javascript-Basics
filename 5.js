/*k={}
var myarr=[["guvi","geek"],["model","fz"],["year","2019"]];
for(i=0;i<myarr.length;i++){
    v=myarr[i];
    k[v[0]]=v[1]
};
console.log(k);*/

//6 


s=[];
var obj = [[["firstname","krish"],["lastname","srivatsav"],["age","21"],["role","python3"]],[["firstname","str"],["lastname","kgf"],["age","28"],["role","js"]]];
for (z=0;z<obj.length;z++)
{
    obj1=obj[z]
    k={};
        for (j=0;j<obj1.length;j++)
    {
        v =obj1[j];
        k[v[0]]=v[v.length-1]
    }
    s.push(k);
};
  console.log(s);

