import { unref } from 'vue';

function isWindow(val) {
  return val === window;
}

function makeDOMRect(width, height) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

export const useRect = elementOrRef => {
  const element = unref(elementOrRef);

  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    return makeDOMRect(width, height);
  }

  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }

  return makeDOMRect(0, 0);
};
