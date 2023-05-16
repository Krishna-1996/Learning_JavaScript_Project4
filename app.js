const totalCount = document.getElementById("num");
var count = 0;
totalCount.innerHTML = count;

//Function for Increment
const incrementNum = () => {
  count++;
  totalCount.innerHTML = count;
};
//Function for Decrement
const decrementNum = () => {
  count--;
  totalCount.innerHTML = count;
};

// const resetNum = () => {
//   document.getElementById("container").reset()
// };

  

//Add click Event
//Select Respective Button
const incrementCount = document.getElementById("up");
const decrementCount = document.getElementById("low");
// const resetCount = document.getElementById("reset");

//Add Click Event to button
incrementCount.addEventListener("click", incrementNum);
decrementCount.addEventListener("click", decrementNum);
// resetCount.addEventListener("click", resetNum);
