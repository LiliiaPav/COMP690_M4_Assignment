let coinFlip;
const repeat = parseInt(prompt("Enter a number"));

if (!isNaN(repeat)) {
  for (i = 0; i <= repeat; i++) {
    let num = Math.round(Math.random());
    if (num === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
} else {
  console.log("Sorry, it's not a number.");
}
