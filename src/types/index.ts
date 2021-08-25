export type Media<T extends string> = Record<T, boolean>;
export type MediaQueries<T extends string> = Array<[ breakpoint: T, mediastring: string ]>;
export type MediaQueryMap<T extends string> = Map<T, MediaQueryList>;