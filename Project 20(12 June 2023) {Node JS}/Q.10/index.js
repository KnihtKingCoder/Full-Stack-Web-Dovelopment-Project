const EventEmitter=require("events")

const eventEmitter=new EventEmitter();

const message = (channelName) => {
    console.log(`Thanks For The Subscribing ${channelName} channel`);
}

eventEmitter.addListener("subscribe",message);

eventEmitter.emit("subscribe","Collage Wallah")

console.log(`the current maximum number of event listeners is ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5)

console.log(`The Updated Maximum number of event listeners is ${eventEmitter.getMaxListeners()}`);