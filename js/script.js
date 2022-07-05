//console.log("linked!");



//- Grab an element from that page
//- Display the clock on that element that I grabed
//	- See if I have a javascript function that can give me a time or date.
//	- call that function each second
//	- update the digital clock


//- Grab an element from that page
let watch = document.querySelector(".watch");

//- Display the clock on that element that I grabed
watch.textContent = "hh:mm:ss";
//console.log("watch=", watch);

//	- See if I have a javascript function that can give me a time or date.
const today = new Date();

// MDN hints on handeling Date object
//const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log("today=", today.getHours(), today.getMinutes(), today.getSeconds());


//	- call that function each second

// I implemented the idea of executing some code at each 1 sec passing of time
	let second= 0;
	setInterval(() => {
	  console.log("test 1 sec");
	  console.log("second=", second);
	  second = second + 1;
	}, 1000)






// I will use `setTimeout(code, delay)` API to do this
//tryed this but it does't work :(
// The code below just prints all the nubers in one go!
// But I want to print something at each second of time.
/*
for (i = 1; i <= 5; ++i) {
  setDelay(i);
}

function setDelay(i) {
  setTimeout(function(){
    console.log(i);
}, 1000);
}
*/
















