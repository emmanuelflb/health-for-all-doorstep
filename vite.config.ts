// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA output for shared/cPanel hosting: no Node server, no Cloudflare Worker.
// The build emits a flat static folder with index.html at its root.
export default defineConfig({
  // Skip the Nitro server bundle entirely — nothing server-side is deployed.
  nitro: false,
  tanstackStart: {
    // SPA mode: render a static shell at build time, hydrate + route on the client.
    spa: { enabled: true },
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
    pages: [{ path: "/" }],
  },
});
