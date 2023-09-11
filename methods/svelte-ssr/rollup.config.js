import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import del from "rollup-plugin-delete";

export default [
  {
    input: ["index.js"],
    output: {
      dir: "dist",
      format: "esm"
    },
    plugins: [
      del({ targets: "dist/*" }),
      resolve({
        exportConditions: ['svelte']
      }),
      svelte({
        compilerOptions: {
          dev: false,
          immutable: true,
          hydratable: true,
          generate: "ssr",
          enableSourcemap: false
        }
      })
    ],
    external: [
      "fs",
      "path",
      "querystring",
      "http",
      "zlib",
      "buffer",
      "tty",
      "util",
      "net",
      "events",
      "stream",
      "string_decoder"
    ]
  }
];
