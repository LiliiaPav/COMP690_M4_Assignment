let countdown = parseInt(prompt("Enter a number"));

if (!isNaN(countdown)) {
  while (countdown >= 0) {
    console.log(countdown);
    countdown--;
  }
} else {
  console.log("Sorry, it's not a number.");
}
