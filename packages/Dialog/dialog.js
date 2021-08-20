import { h, reactive, nextTick, getCurrentInstance } from 'vue';
import { mountComponent } from '../hooks';

import SoDialog from './SoDialog.vue';

let dialogInstance;

const initInstance = () => {
  const wrapper = {
    setup() {
      const state = reactive({
        show: false
      });

      const open = options => {
        Object.assign(state, options);
        nextTick(() => (state.show = true));
      };

      const instance = getCurrentInstance();

      instance.proxy.open = open;

      return () =>
        h(SoDialog, {
          ...state,
          'onUpdate:show': value => (state.show = value)
        });
    }
  };

  const { instance } = mountComponent(wrapper);

  dialogInstance = instance;
};

const dialog = options => {
  return new Promise((resolve, reject) => {
    if (!dialogInstance) {
      initInstance();
    }

    dialogInstance.open({
      ...options,
      callback: action => {
        action === 'confirm' ? resolve(action) : reject(action);
      }
    });
  });
};

SoDialog.alert = options => {
  return dialog(options);
};

SoDialog.install = function (app) {
  app.component('SoDialog', SoDialog);
  app.config.globalProperties.$alert = SoDialog.alert;
};

export default SoDialog;
