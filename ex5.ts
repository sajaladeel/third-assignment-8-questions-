//return factorial
function calculatefactorial(number:number):
number{
    let factorial =1
    for(let i =1;i<= number;i++)
    {
        factorial*=i;
    }
    return factorial;
}