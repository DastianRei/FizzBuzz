import {fizzbuzz, fizzbuzzLista} from "./fizzbuzz";


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
  it("genera 15 en cadena",()=>{
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  })
  it("genera 30 en cadena",()=>{
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  })
  it("genera 10 en cadena lista",()=>{
    expect(fizzbuzzLista(10)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
  })
});