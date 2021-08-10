import SoToast from './SoToast.vue';

SoToast.install = function (app) {
  app.component('SoToast', SoToast);
};
export default SoToast;
