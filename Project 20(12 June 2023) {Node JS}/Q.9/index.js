const EventEmitter=require('events')
const eventEmitter=new EventEmitter();

const message=(ChanneName)=>{
    console.log(`Thanks for SUbcribing ${ChanneName} Channel`);
}

eventEmitter.addListener("subscribe",message);

//---------------------------------------------------------


console.log("Calling Event Listner Before Removing It.......");

eventEmitter.emit("subscribe","Collage Wallah");

//---------------------------------------------------------


console.log("Calling Event Listner After Removing It.......");

eventEmitter.removeListener("subscribe",message)

eventEmitter.emit("subscribe","Collage Wallah");

