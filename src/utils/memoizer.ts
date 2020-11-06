/** Function memoizer. As for 06.11.2020 it only supports primitive arguments,
 * meaning that if we pass objects as keys, they will be cached using their
 * object reference instead of their stringified value. This might change in
 * the future.
 */
export function memoize<T, U extends any[]>(f: (...a: U) => T): (...a: U) => T {
  // We keep the cache as a closure. Each time that a new key-value pair is
  // entered, the cache is mutated (for performance purposes).
  const cache: { [key:string]: T } = {}; // const cache = new Map<string, T>();

  /** TODO */
  function cacher(fn: (...a: U) => T): (...a: U) => T {
    return function(...args: U): T {
      const key = args.join();
      const cachedValue = cache[key];

      if (cachedValue) { // if (cache.has(key))
        return cachedValue; // return cache.get(key);
      }

      const value = fn(...args);
      cache[key] = value; // cache.set(key, value);

      return value;
    };
  };

  return cacher(f);
}
