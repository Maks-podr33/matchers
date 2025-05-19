import { sortHealth } from '../sort-health.js';

test('sortHealth', () => {
    const store = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
	];
	const storeExpect = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];
    const result = sortHealth(store);
    expect(result).toEqual(storeExpect);
});