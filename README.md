# `@manicjs/seo`

Official Manic plugin for SEO metadata, robots directives, and link headers.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Plugin docs: [manicjs.tech/docs/framework/plugins/seo](https://www.manicjs.tech/docs/framework/plugins/seo)

## Install

```bash
bun add @manicjs/seo
```

## Usage

```ts
import { defineConfig } from "manicjs/config";
import { seo } from "@manicjs/seo";

export default defineConfig({
  plugins: [seo({ hostname: "https://example.com" })],
});
```

## License

GPL-3.0
