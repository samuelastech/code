export function useMemo(fn) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    if(cache.has(key)) {
      console.log('Getting a cached value...');
      return cache.get(key);
    } else {
      console.log('Saving in the cache');
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  }
}