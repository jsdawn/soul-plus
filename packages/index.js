import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';
import SoButton from './Button';
import SoOverlay from './Overlay';
import SoPopup from './Popup';

const components = [
  SoDropdownMenu,
  SoDropdownItem,
  SoButton,
  SoOverlay,
  SoPopup
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
  SoPopup
};

export default SoulPlus;
