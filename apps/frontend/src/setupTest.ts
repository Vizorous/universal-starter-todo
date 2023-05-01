import "@testing-library/jest-dom";

import * as ResizeObserverModule from "resize-observer-polyfill";
// @ts-expect-error
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
}),
	((global as any).ResizeObserver = ResizeObserverModule.default);
