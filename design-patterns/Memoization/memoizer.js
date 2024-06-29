export function useMemo(fn) {
  const cache = new Map();

  const newFn = (...args) => {
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

  newFn.release = () => cache.clear();
  return newFn;
}