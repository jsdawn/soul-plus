import SoToast from './toast';

SoToast.install = app => {
  app.config.globalProperties.$toast = SoToast;
};

export default SoToast;
