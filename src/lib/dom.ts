/** TODO */
export function byClass<T extends Element>(name: string): HTMLCollectionOf<T> {
  return document.getElementsByClassName(name) as HTMLCollectionOf<T>;
}

/** TODO */
export function byTag<T extends Element>(tag: string): HTMLCollectionOf<T> {
  return document.getElementsByTagName(tag) as HTMLCollectionOf<T>;
}

export const isTouchDevice = 'ontouchstart' in window;
