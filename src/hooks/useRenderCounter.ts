import { useRef } from 'react';

/**
 * A custom React hook that tracks, increments, and logs the render count
 * of a component instance to the browser console.
 * @remarks
 * This hook will only log when running in a development environment (`import.meta.env.DEV === true`)
 * and if present, requires your build system's global log flag (`VITE_ENABLE_RENDER_LOGS`) to be set to `'true'`.
 * @param {string} componentName - The human-readable name of the component being tracked.
 * @param {boolean} [isDebugging=true] - A local override flag. Set to `false` to silence logging for this specific component instance.
 * @returns {void}
 * @example
 * ```tsx
 * import { useRenderCounter } from '@hooks/useRenderCounter';
 * function MyComponent() {
 *   // Automatically tracks and logs renders in development mode
 *   useRenderCounter('MyComponent');
 *   return <div>Hello World</div>;
 * }
 * ```
 */
export function useRenderCounter(componentName: string, isDebugging: boolean = true): void {
  const renderCount = useRef<number>(0);
  renderCount.current++;

  const isDev = import.meta.env.DEV === true;
  const globalLogEnabled = import.meta.env.VITE_ENABLE_RENDER_LOGS === 'true';

  if (isDev && globalLogEnabled && isDebugging) {
    console.log(
      `%c[Render Trace] %c${componentName} %chas rendered %c${renderCount.current} %ctimes.`,
      'color: #70a1ff; font-weight: bold;',
      'color: #ff4757; font-weight: bold;',
      'color: inherit;',
      'color: #2ed573; font-weight: bold;',
      'color: inherit;',
    );
  }
}
