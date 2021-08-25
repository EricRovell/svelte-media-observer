<div align="center">
  <img
    alt="Telescope as package logo"
    src="assets/logo.svg"
    width="125px"
    height="125px"
    padding="25px"
  />
</div>

<div align="center">
  <a href="https://github.com/EricRovell/svelte-media-observable/actions">
    <img alt="build action status" src="https://github.com/EricRovell/svelte-media-observable/workflows/build/badge.svg" />
  </a>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/svelte-media-observable">
    <img alt="npm package version" src="https://badgen.net/npm/v/svelte-media-observable/" />
  </a>
  <a href="https://www.npmjs.com/package/svelte-media-observable">
    <img alt="types included" src="https://badgen.net/npm/types/svelte-media-observable/" />
  </a>
  <a href="https://www.npmjs.com/package/svelte-media-observable">
    <img alt="downloads count" src="https://badgen.net/npm/dt/svelte-media-observable/" />
  </a>
  <a href="https://www.npmjs.com/package/svelte-media-observable">
    <img alt="node version" src="https://badgen.net/npm/node/svelte-media-observable/" />
  </a>
  <a href="https://www.npmjs.com/package/svelte-media-observable">
    <img alt="licence" src="https://badgen.net/npm/license/svelte-media-observable/" />
  </a>
</div>

<div align="center">
  <a href="https://bundlephobia.com/package/svelte-media-observable">
    <img alt="minified size" src="https://badgen.net/bundlephobia/min/svelte-media-observable/" />
  </a>
  <a href="https://bundlephobia.com/package/svelte-media-observable">
    <img alt="minzipped size" src="https://badgen.net/bundlephobia/minzip/svelte-media-observable/" />
  </a>
  <a href="https://bundlephobia.com/package/svelte-media-observable">
    <img alt="dependency count" src="https://badgen.net/bundlephobia/dependency-count/svelte-media-observable/" />
  </a>
  <a href="https://bundlephobia.com/package/svelte-media-observable">
    <img alt="tree-shaking" src="https://badgen.net/bundlephobia/tree-shaking/svelte-media-observable/" />
  </a>
</div>

# Svelte Media Observable

Svelte Media Observable is small utility media queries observable build for [Svelte](https://svelte.dev/) framework.

## Getting started

The package is available via [npm](https://www.npmjs.com/package/svelte-media-observable):

```
npm i svelte-media-observable
```

## Usage

```ts
import { mediaObservable } from "svelte-media-observable";
import type { MediaQueries } from "svelte-media-observable";

const mediaQueries: MediaQueries<"small" | "medium" | "dark"> = [
  [ "small", "(max-width: 640px)" ],
  [ "medium", "(max-width: 935px)" ],
  [ "dark", "(prefers-color-scheme: dark)" ]
];

export const media = mediaObservable(mediaQueries);
```

Observable contains all named media queries as `Record<breakpointName: string, queryMatch: boolean>`. It is build on [svelte/stores](https://svelte.dev/docs#svelte_store), so the usage is the same:

```html
<script>
  import { media } from "your-observable-path";
</script>

{#if $media.small}
  <NavMobile />
{#else}
  <NavDesktop />
{/if}
```

## Note

It is a nice idea to create several stores, as some media queries will update rarely.

## Issues

While using Typescript and ESLint for Svelte, you might meet some [limitations](https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript) to type-aware rules. [Link](https://github.com/sveltejs/eslint-plugin-svelte3/issues/89) to the issue.

```html
<script>
  import { media } from "your-observable-path";
</script>

// incorrect no-unsafe-member-access error
{#if $media.small}
  <NavMobile />
{#else}
  <NavDesktop />
{/if}
```