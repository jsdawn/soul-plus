import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';
import SoButton from './Button';

const components = [SoDropdownMenu, SoDropdownItem, SoButton];

const install = app => {
  if (install.installed) return;
  components.forEach(component => {
    app.use(component);
  });
};

const SoulPlus = { install };

export { install, SoDropdownMenu, SoDropdownItem, SoButton };

export default SoulPlus;
