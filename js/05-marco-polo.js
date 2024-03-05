let input = 1;
while (input <= 100) {
  if (input % 3 == 0 && input % 5 == 0) {
    console.log("Marco!Polo!");
  } else if (input % 3 == 0) {
    console.log("Marco!");
  } else if (input % 5 == 0) {
    console.log("Polo!");
  } else {
    console.log(input);
  }

  input += 1;
}
