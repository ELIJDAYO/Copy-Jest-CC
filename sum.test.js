const sum = require('./sum');

describe('example tests', () => {
  it('should add 1 + 2 to equal to 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it('object assignment', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe('truthy or falsey', () => {
  it('null', () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

describe('arrays', () => {
  const shoppingLists = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  expect(shoppingLists).toContain('milk');
});

function compileAndroidCode(){
    throw new Error("you are using the wrong JDK")
}

describe("exceptions", () => {
    it("compiling android goes as expected", () =>{
        expect(() => compileAndroidCode()).toThrow(
            "you are using the wrong JDK"
        )
    })
})