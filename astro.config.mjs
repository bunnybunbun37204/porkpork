import { defineConfig, sharpImageService } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://porkpork.pages.dev/",
  integrations: [tailwind(), icon(), robotsTxt()],
  image: {
    service: sharpImageService(),
  },
});
