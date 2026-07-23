const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();
//Synchonous call . javascript is single threaded language. 
// in asynchronous call we can use event loop to managgae the call stack 
// asyn. call usingbtimers
//  1 set timeout 
// 2 set immediate
//  3 process.nextTick
// 4 set interval
// 