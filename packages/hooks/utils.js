import { createApp } from 'vue';

export const inBrowser = typeof window !== 'undefined';

export function isFunction(val) {
  return typeof val === 'function';
}

export function isObject(val) {
  return val !== null && typeof val === 'object';
}

export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

// 从 obj 中挑选 keys 返回。 ignoreUndefined 为 true 时 忽略 undefined值
export function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }
    return ret;
  }, {});
}

export function mountComponent(RootComponent) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }
  };
}

// 将 htmlCollection append to parentElement
export function appendElements(htmlCollection, parentElement) {
  Array.from(htmlCollection).forEach(child => {
    if (child.nodeType === 1) {
      (parentElement || document.body).appendChild(child);
    }
  });
}

// trigger dom event
export function trigger(target, type) {
  const inputEvent = document.createEvent('HTMLEvents');
  inputEvent.initEvent(type, true, true);
  target.dispatchEvent(inputEvent);
}
