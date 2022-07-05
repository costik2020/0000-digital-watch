//console.log("linked!");



//- Grab an element from that page
//- Display the clock on that element that I grabed
//	- See if I have a javascript function that can give me a time or date.
//	- call that function each second
//	- update the digital clock


//- Grab an element from that page
let watch = document.querySelector(".watch");

// Have some variables with my hh:mm:ss time...
let hh, mm, ss;

//- Display the clock on that element that I grabed
watch.textContent = "hh:mm:ss";
//console.log("watch=", watch);

//	- See if I have a javascript function that can give me a time or date.
let today = new Date();

// MDN hints on handeling Date object
//const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
//console.log("today=", today.getHours(), today.getMinutes(), today.getSeconds());
//watch.textContent = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;


//	- call that function each second

// I implemented the idea of executing some code at each 1 sec passing of time
	let second= 0;
	setInterval(() => {
		today = new Date();
	  console.log("test 1 sec");
	  //console.log("second=", second);
	  second = second + 1;
	  //watch.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
	  // Display the time corectly in a 2 digits format
	  hh = setTwoDigits(today.getHours());
	  mm = setTwoDigits(today.getMinutes());
	  ss = setTwoDigits(today.getSeconds());

	 //let test = setTwoDigits(12);
	 //console.log("test=", test);
	 //ss = today.getSeconds();
	 watch.innerHTML = `${hh}:${mm}:${ss}`;

	  //watch.innerHTML = `${second} test`;
	  //console.log("watch.textContent=", `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
  }, 1000)



// A small function that will make sure that if recives a 1 digit number then it will output a 2 digit nr
// For the input of 2 or 16
// It will output  02 or 16
function setTwoDigits(number){
	let newNumber;
	if (number <10){
		newNumber = `0${number}`;

	}
	else {
		newNumber = number;
	}
	return newNumber;
}


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
















