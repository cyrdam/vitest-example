# vite-example

This repository is a example how to create a`vite` app with`preact`.

Following packages are mainly used:

- vite
- preact
- typescript
- eslint
- prettier

Testing packages:

- vitest
- @testing-library/preact
- happy-dom
- vitest-dom

## Getting started

Install the dependencies with your package manager of choice. This example will use `pnpm` as the package manager.

### Installation

```shell
pnpm install
```

### Run the application

```shell
pnpm dev
```

### Run unit tests

```shell
pnpm test
```

## Unit Tests

Check out the [app.test.tsx](src/app.test.tsx) file.

### Configuration

Check out the [vite.config.ts](./vite.config.ts) file.

Here is an example how it can look like with `happy-dom`:

```typescript
/// <reference types="vitest" />
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'import.meta.vitest': 'undefined',
	},
	plugins: [preact()],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./src/test-setup.ts'],
		includeSource: ['src/**/*.{ts,tsx}'],
		mockReset: true,
		restoreMocks: true,
	},
});
```

More information at [https://vitest.dev/guide/#configuring-vitest](https://vitest.dev/guide/#configuring-vitest).
