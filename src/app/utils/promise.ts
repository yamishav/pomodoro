export function timeoutPromise(timeInMs: number): Promise<boolean> {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(true)
    }, timeInMs);
  });
}
