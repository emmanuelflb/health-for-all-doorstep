// Produces a flat, cPanel-ready static SPA in ./dist:
//   dist/index.html, dist/assets/*, dist/.htaccess (SPA fallback)
// No Node server, no Cloudflare Worker, no SSR at request time.
import { execSync } from "node:child_process";
import { cpSync, existsSync, rmSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");

rmSync(dist, { recursive: true, force: true });
execSync("vite build", { stdio: "inherit" });

const client = join(dist, "client");
if (!existsSync(client)) {
  throw new Error("Expected dist/client after build — did the SPA config change?");
}

// Flatten dist/client/* into dist/*
for (const entry of readdirSync(client)) {
  cpSync(join(client, entry), join(dist, entry), { recursive: true });
}
rmSync(client, { recursive: true, force: true });
rmSync(join(dist, "server"), { recursive: true, force: true });
rmSync(join(dist, ".vite"), { recursive: true, force: true });

// Apache/cPanel rewrite so client-side routes resolve to index.html
writeFileSync(
  join(dist, ".htaccess"),
  `Options -MultiViews
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^ index.html [L]
`,
);

console.log("\nStatic SPA ready in ./dist (index.html at the root).");
