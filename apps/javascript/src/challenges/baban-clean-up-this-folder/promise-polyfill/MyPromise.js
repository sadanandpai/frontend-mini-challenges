// TODO: Add validations in each promise method for accepting any argument

class MyPromise {
  constructor(executor) {
    this._state = "pending";
    this._callbacks = [];

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve(value) {
    if (this._state !== "pending") return;
    this._result = value;
    this._state = "fulfilled";
    this._handleSettled("onFulfilled");
  }

  _reject(error) {
    if (this._state !== "pending") return;
    this._result = error;
    this._state = "rejected";
    this._handleSettled("onRejected");
  }

  _handleSettled(onSettled) {
    queueMicrotask(() => {
      for (const cb of this._callbacks) {
        try {
          const result = cb[onSettled](this._result);
          cb.resolve(result);
        } catch (err) {
          cb.reject(err);
        }
      }
    });
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._callbacks.push({
        onFulfilled: onFulfilled ?? ((value) => value),
        onRejected:
          onRejected ??
          ((err) => {
            throw err;
          }),
        resolve,
        reject,
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(onFinally, onFinally);
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new MyPromise((_, reject) => reject(value));
  }

  static all(promises) {
    const fulfilled = [];
    let promiseCount = 0;

    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([]);
      }
      promises.forEach((promise, index) => {
        promise
          .then((value) => {
            fulfilled[index] = value;
            promiseCount++;
            if (promiseCount === promises.length) {
              resolve(fulfilled);
            }
          })
          .catch((error) => reject(error));
      });
    });
  }

  static any(promises) {
    const rejected = [];
    let promiseCount = 0;

    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        reject([]);
      }
      promises.forEach((promise, index) => {
        promise
          .then((value) => {
            resolve(value);
          })
          .catch((error) => {
            rejected[index] = error;
            promiseCount++;

            if (promiseCount === promises.length) {
              reject(rejected);
            }
          });
      });
    });
  }
}

const p1 = new MyPromise((res, rej) => {
  setTimeout(() => {
    res("All cool");
    // rej("errrrr");
  }, 1000);
});

const p2 = new MyPromise((res, rej) => {
  setTimeout(() => {
    rej("All cool P2!");
    // rej("errrrr");
  }, 800);
});

// const p1 = MyPromise.resolve("All cool!");
// const p2 = MyPromise.reject("All cool P2!");

// const result = MyPromise.all([p1, p2]);
// result.then((res) => console.log(res)).catch((err) => console.log(err));

const result = MyPromise.any([p1, p2]);
result
  .then((res) => console.log(res))
  .catch((err) => {
    console.error("error");
    console.error(err);
  });

// p1.then((res) => {
//   console.log(res);
//   return res;
// })
//   .then((res) => console.log(`${res} bro!`))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("final call"));
