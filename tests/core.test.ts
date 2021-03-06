/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mediaObserver } from "../src";
import type { MediaQueries } from "../src/types";

describe("Observable", () => {
	it("Constructs an observable and returns a store", () => {
		const mediaQueries: MediaQueries<"small" | "medium" | "dark"> = [
			[ "small", "(max-width: 640px)" ],
			[ "medium", "(max-width: 935px)" ],
			[ "dark", "(prefers-color-scheme: dark)" ]
		];
		const media = mediaObserver(mediaQueries);
		expect(typeof media.subscribe).toEqual("function");
	});
});