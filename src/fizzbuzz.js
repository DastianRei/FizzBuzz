function fizzbuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  }
  if (num % 5 == 0) {
    return "Buzz";
  }
  if (num % 3 == 0) {
    return "Fizz";
  }
  return num.toString();
}

function fizzbuzzLista(n) {
  let texto = "";
  for (let i = 1; i < n + 1; i++) {
    texto += fizzbuzz(i);
    if (i < n) {
      texto += ", ";
    }
    
  }
  return texto;
}
export { fizzbuzzLista, fizzbuzz };
