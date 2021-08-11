import { h, render } from 'vue';
import ToastConstructor from './SoToast.vue';

let instances = [];
const defaultOpts = {
  type: 'text',
  position: 'bottom', // middle bottom
  message: '',
  duration: 2000,
  transition: undefined,
  overlay: false,
  overlayClass: undefined,
  forbidClick: false, // 静止点击背景
  closeOnClickOverlay: false,
  lockScroll: false
};

const clear = () => {
  for (let instance of instances) {
    instance.vm.component?.ctx.close();
  }
  instances = [];
};

const Toast = function (opts) {
  clear();

  if (typeof opts === 'string') {
    opts = { message: opts };
  }

  let options = { ...defaultOpts, ...opts };

  const container = document.createElement('div');
  container.className = 'container_toast';

  // createVNode 方法创建一个 vNode 独享
  const vm = h(ToastConstructor, options);

  // clean element preventing mem leak
  vm.props.onClosed = () => {
    render(null, container);
  };

  // 使用 render 方法转换成真实dom
  render(vm, container);

  instances.push({ vm });

  document.body.appendChild(container.firstElementChild);

  return {
    close: () => (vm.component.proxy.show = false)
  };
};

Toast.clear = clear;

export default Toast;
