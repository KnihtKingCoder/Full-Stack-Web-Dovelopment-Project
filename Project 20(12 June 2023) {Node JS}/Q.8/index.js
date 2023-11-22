const EventEmitter=require('events')
const eventEmitter=new EventEmitter();

const message=(ChanneName)=>{
    console.log(`Thanks for SUbcribing ${ChanneName} Channel`);
}

eventEmitter.addListener("subscribe",message);

eventEmitter.emit("subscribe","Collage Wallah");

