import { fireEvent, render, screen, waitFor } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';

import { App } from './app';

describe('App', () => {
	test('should render App', () => {
		const { container } = render(<App />);
		expect(container.textContent).contains('Vite + Preactcount is Edit');
	});

	test('should increment after "count is" button is clicked', async () => {
		render(<App />);

		fireEvent.click(screen.getByText('count is'));
		await waitFor(() => {
			// .toBeInTheDocument() is an assertion that comes from jest-dom.
			// Otherwise you could use .toBeDefined().
			expect(screen.getByText('count is 1')).toBeInTheDocument();
		});
	});
});
