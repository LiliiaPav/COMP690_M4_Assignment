let myString = "#";
for (i = 1; i <= 7; i++) {
  console.log(myString);
  myString += myString.slice(-1);
}
