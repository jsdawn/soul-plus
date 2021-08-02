import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';
import SoButton from './Button';
import SoOverlay from './Overlay';

const components = [SoDropdownMenu, SoDropdownItem, SoButton, SoOverlay];

const install = app => {
  if (install.installed) return;
  components.forEach(component => {
    app.use(component);
  });
};

const SoulPlus = { install };

export { install, SoDropdownMenu, SoDropdownItem, SoButton, SoOverlay };

export default SoulPlus;
