import Toast from './toast';

Toast.install = app => {
  app.config.globalProperties.$toast = Toast;
};

export default Toast;
