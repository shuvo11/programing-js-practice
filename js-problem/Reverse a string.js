function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
      var char = str[i];
      reverse = char + reverse;
    }
return reverse;
}
var text = "Hello vai alien";
var talk = reverseString(text);
console.log(talk);