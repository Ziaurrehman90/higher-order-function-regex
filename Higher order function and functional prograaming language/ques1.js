// calling the settime out function 
input="ziaurrehman malik"
// creation of reverse function 
console.log("original string is ",input);
function reverse(str){
    return str.split("").reverse().join("");
}
function reversewithdelay(input){
    setTimeout(function(){
        let ans=reverse(input);
        console.log(ans);
    },2000);
}
reversewithdelay(input)

  


