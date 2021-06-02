

function getArraySum(numbers){
    var sum = 0;

for (var i = 0; i < numbers.length; i++){
   var element = numbers[i];
   sum = sum + element;

}
return sum;
}
var numbers = [10,20,30,40,60];
var result = getArraySum(numbers);
console.log('Total numbers :',result);
var total = getArraySum([30,20]);
console.log(total);
