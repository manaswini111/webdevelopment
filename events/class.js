const emitter=require('events');

class something extends emitter{
    greetuser(username){
        console.log(`welcome ${username} to nodejs`);
    }
}
const a=new something();

a.on("greet",()=>{
    a.greetuser("maanswini");
})
a.emit("greet");