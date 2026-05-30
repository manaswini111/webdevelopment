const {Buffer}=require('buffer');
//const buf=Buffer.alloc(6);
//const buf=Buffer.from("manu");
//const buf2=Buffer.allocUnsafe(10);
//console.log(buf2);
//const buf=Buffer.from("manaswini upadhyayula");
//console.log(buf.toString());
//buf[0]=77;
//console.log(buf.toString());

//console.log(buf.toString());
//console.log(buf.toString("utf-8",0,13));
//console.log(buf.toString());
const buf=Buffer.from("manu");
const buf2=Buffer.from("swini");
const merged=Buffer.concat([buf,buf2]);
console.log(merged.length);
