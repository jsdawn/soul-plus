import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';

const components = [SoDropdownMenu, SoDropdownItem];

const install = app => {
  if (install.installed) return;
  components.forEach(component => {
    app.use(component);
  });
};

const SoulUI = { install };

export { install, SoDropdownMenu, SoDropdownItem };

export default SoulUI;
