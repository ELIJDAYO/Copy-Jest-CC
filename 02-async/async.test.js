const fetchData = require('./async');

it('should return correct todo', () => {
// option 1
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});
it('should return correct todo', async() => {
    // option 2
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
});
