function fizzbuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  }
  if (num == 5) {
    return "Buzz";
  }
  if (num == 3) {
    return "Fizz";
  }
  return num.toString();
}

export default fizzbuzz;
