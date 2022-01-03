const testUtils = require('./test-utils');

test('generate uuid', () => {
    const uuid = testUtils.getUuid();
    expect(uuid.length).toBeTruthy();
    expect(uuid.length).toBe(36);
})