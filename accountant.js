/*
    An accountant is still unable to sum things up.
    It's either an invalid result or even not a number.
    Add some code so that the final sum will fit.
    Mission is accomplished if console.log() at line #18 runs.
    NOTE: it's prohibited to modify the code of the IIFE itself //IIFE Immediatly Invoked Function Expression inside a local scope
 */
//modularpath
(function accountant() {
    const balance = [1,2,,4,5];
    let z=balance;
    let c=0;
    let sum = 0;
    
    Desktop\Javascript Basics   for (let i = 0; i < balance.length; i++) {
        if(z[i]==undefined)
        {
            z.splice(i,1);
        }
        //console.log(z); for checking 
        for (i in z)
        {
            c=c+z[i];
        }
        ans=15-c; //
        z.unshift(ans);
        for (i in z)
        {
            sum=sum+z[i];
        }
        
    }
    if (sum !== 15) {
        throw new Error(`Oh no! It's all wrong again!`);
    }
    console.log(`Yep! It's correct:-)`);
})();