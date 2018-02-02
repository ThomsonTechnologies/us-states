it('returns the states by name', () => {
    const states = require('../states.ts');
    expect(states.States.byName()['Alabama']).toBe('AL');
});

it('returns the states by abbreviation', () => {
    const states = require('../states.ts');
    expect(states.States.byAbbreviation()['AL']).toBe('Alabama');
});