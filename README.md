# ssr-benchmarks

Benchmarks of various approaches to SSR:
- react-ssr (using `react-dom`)
- preact-ssr (using `preact-render-to-string`)
- react-htm-ssr (using `react-dom` after transforming JSX to `htm` tagged template literals)
- preact-htm-ssr (using `preact-render-to-string` after transforming JSX to `htm` tagged template literals)
- react-esx-ssr (using `esx-js`)
- lithtml-ssr (using [`@popesindustry/lit-html-server`](https://github.com/popeindustries/lit-html-server))