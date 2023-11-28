const validUrl=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
const inputUrl=".example.com/index.html";
if(validUrl.test(inputUrl)==true){
    console.log("the given URL is valid");
}
else{
    console.log("given URL is not a valid one ")
}