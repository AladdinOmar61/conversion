/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Rates from './Rates';

describe('Gets rates of currencies', () => {
	const mockData = {
		USD: {
			code: 'USD',
			rate_float: Math.random() * 60000 + 1000,
		},
		GBP: {
			code: 'GBP',
			rate_float: Math.random() * 60000 + 1000,
		},
		EUR: {
			code: 'EUR',
			rate_float: Math.random() * 60000 + 1000,
		},
	};

	it('Checks if one currency equals the other', async () => {
		const { getByText } = await render(
			<Rates currency={mockData} loading={true} />
		);
		// Check for "1 {code} equals" format
		Object.keys(mockData).forEach((identifier) => {
			const { rate_float } = mockData[identifier];
			const result = 1 / rate_float;
			const expected = `1 BTC is ${result}`;
			const actual = getByText((_, element) => element.textContent === expected);
			expect(actual).toBeTruthy();
		});
	});
});
