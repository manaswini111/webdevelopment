const eventemitter=require('events');
const a=new eventemitter();
a.on('greet',(username)=>{
    console.log(`welcome ${username} to nodejs`);
})
a.once('pushnotify',()=>{
    console.log("you have a new notification");
})
const b=()=>{
    console.log("something ");
}
a.on("test", b);
a.emit("test");
a.emit("test");
a.removeListener("test",b);
a.emit("test");
//a.emit('greet',"manaswini");
//a.emit('greet',"manaswini");
//a.emit('pushnotify');
//a.emit('pushnotify');
console.log(a.listeners("greet"));