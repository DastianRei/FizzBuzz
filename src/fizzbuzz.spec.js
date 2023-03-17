import fizzbuzz from "./fizzbuzz";


describe("Fizz Buzz", () => {
  it("genera 1 en cadena", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  it("genera 2 en cadena", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
  it("genera 2 en cadena", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
});