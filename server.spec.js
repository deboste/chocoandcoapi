const { handler } = require('./server');

it('Get / return a json with message and methode items', () => {
    var result = handler();
    expect(result.message).toBe("Chocolatine");
});
