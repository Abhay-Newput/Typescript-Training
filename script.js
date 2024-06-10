console.log("first console");

setTimeout(() => {
  console.log("1st set timeout");
  setTimeout(() => {
    console.log("inside 1st set timeout");
  }, "2000");
  console.log("after ONE");
}, "2000");

console.log("second log ");

setTimeout(() => {
  console.log("2nd set timeout");
  setTimeout(() => {
    console.log(" Inside 2st set timeout");
  }, "2000");
  console.log("after TWO");
}, "2000");

console.log("third log");
