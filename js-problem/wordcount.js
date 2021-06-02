var speech = "I am a  profational  webdeveloper";
var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
console.log(speech.length);