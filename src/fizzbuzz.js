function fizzbuzz(num) {
  if (num == 5) {
    return "Buzz";
  }
  if (num == 3) {
    return "Fizz";
  }
  return num.toString();
}

export default fizzbuzz;
