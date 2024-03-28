import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), icon()],
  site: 'https://bunnybunbun37204.github.io',
  base: 'porkpork',
  image: {
    service: passthroughImageService(),
  },
});
