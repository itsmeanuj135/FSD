import {EventEmitter} from "node:events";
const task = new EventEmitter();
const sayHi = (name) =>{
    console.log(`Loggedin ${name}`);
}; 
task.on("greet",()=>{
    console.log("Logged Out");
});
task.once("greet",()=>{
    console.log("system started...");
});

task.on("greet",sayHi)

task.on("greet",(name)=>{
    console.log(`system is shutting down by ${name}`)

})



task.emit('greet','Deepanshu Tripathi')
task.emit("greet","Sonia singh");
task.emit("greet","Rahul Singh")
task.off("greet","Manager");
