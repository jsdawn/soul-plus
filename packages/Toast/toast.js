import { h, render } from 'vue';
import ToastConstructor from './SoToast.vue';

const Toast = opts => {
  if (typeof opts === 'string') {
    opts = { message: opts };
  }

  let options = opts;

  const container = document.createElement('div');

  container.className = `container_toast_1`;


  const vm = h(ToastConstructor, options);

  // clean element preventing mem leak
  vm.props.onDestroy = () => {
    render(null, container);
  };

  render(vm, container);
  document.body.appendChild(container.firstElementChild);

  return {
    close: () => (vm.component.proxy?.show = false)
  };
};


export default Toast;