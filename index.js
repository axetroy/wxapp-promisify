function promisify(wxx) {
  wxx = { ...wxx };
  for (let attr in wxx) {
    if (wxx.hasOwnProperty(attr) && typeof wxx[attr] === 'function') {
      // skip over the sync method
      if (/sync$/.test(attr)) {
      } else if (wxx[attr + 'Async']) {
        console.warn(`${attr + 'Async'} have been defined in ${wxx}`);
      } else {
        wxx[attr + 'Async'] = function asyncFunction(argv = {}) {
          return new Promise(function(resolve, reject) {
            wxx[attr].call(wxx, {
              ...argv,
              ...{
                success(res) {
                  resolve(res);
                },
                fail(err) {
                  debugger;
                  reject(err);
                }
              }
            });
          });
        };
      }
    }
  }
  return wxx;
}

export default promisify(typeof wx === 'object' ? wx : {});
export { promisify };
