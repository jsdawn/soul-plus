import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';
import SoButton from './Button';
import SoOverlay from './Overlay';
import SoPopup from './Popup';
import SoToast from './Toast';
import SoIcon from './Icon';
import SoTabs from './Tabs';
import SoTabPane from './TabPane';
import SoDialog from './Dialog';

const components = [
  SoDropdownMenu,
  SoDropdownItem,
  SoButton,
  SoOverlay,
  SoPopup,
  SoToast,
  SoIcon,
  SoTabs,
  SoTabPane,
  SoDialog
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
  SoIcon,
  SoTabs,
  SoTabPane,
  SoDialog
};

export default SoulPlus;
