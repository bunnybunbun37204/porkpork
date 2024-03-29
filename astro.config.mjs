import { defineConfig, sharpImageService } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://porkpork.pages.dev/",
  integrations: [tailwind(), icon()],
  image: {
    service: sharpImageService(),
  },
});
