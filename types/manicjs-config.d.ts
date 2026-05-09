/**
 * Minimal typings for `manicjs/config` so this package typechecks without
 * compiling the full Manic core graph (workspace symlinks would otherwise pull
 * in all of `manicjs`).
 */
export interface ManicServerPluginContext {
  addRoute(path: string, handler: () => Promise<Response>): void;
  addLinkHeader(value: string): void;
  injectHtml(tags: string): void;
}

export interface ManicBuildPluginContext {
  emitClientFile(path: string, body: string): Promise<void>;
  injectHtml(tags: string): void;
}

export interface ManicPlugin {
  name: string;
  preload?: string;
  bunfig?: string;
  configureServer?(ctx: ManicServerPluginContext): void | Promise<void>;
  build?(ctx: ManicBuildPluginContext): void | Promise<void>;
}

export function createPlugin(options: {
  name: string;
  preload?: string;
  bunfig?: string;
  staticFiles?: Array<{
    path: string;
    content: string | ((ctx: unknown) => string | Promise<string>);
    contentType?: string;
  }>;
  configureServer?(ctx: ManicServerPluginContext): void | Promise<void>;
  build?(ctx: ManicBuildPluginContext): void | Promise<void>;
}): ManicPlugin;
