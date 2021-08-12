import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';
import SoButton from './Button';
import SoOverlay from './Overlay';
import SoPopup from './Popup';
import SoToast from './Toast';
import SoIcon from './Icon';

const components = [
  SoDropdownMenu,
  SoDropdownItem,
  SoButton,
  SoOverlay,
  SoPopup,
  SoToast,
  SoIcon
];

const install = app => {
  if (install.installed) return;
  components.forEach(component => {
    app.use(component);
  });
};

const SoulPlus = { install };

export {
  install,
  SoDropdownMenu,
  SoDropdownItem,
  SoButton,
  SoOverlay,
  SoPopup,
  SoToast,
  SoIcon
};

export default SoulPlus;
