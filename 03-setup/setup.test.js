let animals = ['elephant', 'zebra', 'bear', 'tiger'];

// beforeAll(() => {
//     console.log("Before all test")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

// afterEach(() =>{
//     console.log("After each test")
//     animals = ['elephant', 'zebra', 'bear', 'tiger']
// })

describe('animals array', () => {
  beforeEach(() => {
    console.log('Before each test');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

  it('should add animal to end of array', () => {
    animals.push('aligator');
    expect(animals[animals.length - 1]).toBe('aligator');
  });

  it('should add animal to beginning of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  it('should have initial length of 4', () => {
    expect(animals.length).toBe(4);
  });
});

describe('testing something else', () => {
  it.only('true should be truthy', () => {
    expect(true).toBeTruthy();
  });
});
