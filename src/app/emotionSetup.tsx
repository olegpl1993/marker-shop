"use client";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "my-custom-styles",
  prepend: true, // Пользовательские стили будут вставлены раньше
});

export default cache;
