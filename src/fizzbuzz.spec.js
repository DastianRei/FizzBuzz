import fizzbuzz from "./fizzbuzz";


describe("Fizz Buzz", () => {
  it("genera 1 en cadena", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  it("genera 2 en cadena", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
  it("genera 3 en cadena", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("genera 4 en cadena", () => {
    expect(fizzbuzz(4)).toEqual("4");
  });
  it("genera 5 en cadena", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
});