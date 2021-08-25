import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Media, MediaQueryMap, MediaQueries } from "../types";

/**
 * Composes an object of current media queries state.
 */
function matchMedia<T extends string>(mqls: MediaQueryMap<T>): Media<T> {
	const media = {} as Media<T>;

	for (const [ alias, mediaList ] of mqls) {
		media[alias] = mediaList.matches;
	}

	return media;
}

/**
 * Initializes a media queries observable.
 */
export function mediaObservable<T extends string>(mediaQueries: MediaQueries<T>): Writable<Media<T>> {
	return writable({} as Media<T>, set => {
		if (!globalThis.window) {
			return;
		}

		const mqls: MediaQueryMap<T> = new Map();    
		const updateMedia = () => set(matchMedia<T>(mqls));

		for (const [ alias, mediaQueryString ] of mediaQueries) {
			const media = window.matchMedia(mediaQueryString);
			media.addEventListener("change", updateMedia);
			mqls.set(alias, window.matchMedia(mediaQueryString));
		}

		updateMedia();

		return () => {
			for (const alias of mqls.keys()) {
				mqls.get(alias)?.removeEventListener("change", updateMedia);
			}
		};
	});
}