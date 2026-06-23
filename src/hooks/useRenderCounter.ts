/**
 * A custom React hook that logs each render of a component instance to the browser console.
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
  const isDev = import.meta.env.DEV;
  const globalLogEnabled = import.meta.env.VITE_ENABLE_RENDER_LOGS === 'true';

  if (!isDev || !globalLogEnabled || !isDebugging) {
    return;
  }

  console.count(`[Render Trace] ${componentName}`);
}
