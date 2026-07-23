//ordering
console.log("1:start");
setTimeout(() => console.log("2:timeout"), 0);
setImmediate(() => console.log("3:immediate"));
process.nextTick(() => console.log("4:nextTick"));
console.log("5:end");