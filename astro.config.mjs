import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://bunnybunbun37204.github.io',
  base: 'porkpork',
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
    imageService: 'passthrough'

  }),
  integrations: [tailwind(), icon()],
});
