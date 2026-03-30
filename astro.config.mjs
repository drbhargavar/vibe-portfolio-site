import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE ?? "https://example.com";

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
});

