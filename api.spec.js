const { handler } = require('./api');

it('Get / return a json with message and methode items', () => {
    var result = handler();
    expect(result.message).toBe("Chocolatine");
});
