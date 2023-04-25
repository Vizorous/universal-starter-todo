import "@testing-library/jest-dom";
// @ts-expect-error
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import * as ResizeObserverModule from 'resize-observer-polyfill';

(global as any).ResizeObserver = ResizeObserverModule.default;