//[0,1,1,2,3,5,8,13]

function fibonacci(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    else{
        var fibo=fibonacci(n-1);
        var nextElement=fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result =fibonacci(11);
console.log(result);
