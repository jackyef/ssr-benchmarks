import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";

export default [
  {
    input: ["index.js"],
    output: {
      dir: "dist",
      format: "cjs"
    },
    plugins: [
      del({ targets: "dist/*" }),
      commonjs(),
      resolve(),
      svelte({
        dev: false,
        immutable: true,
        hydratable: true,
        generate: "ssr"
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
