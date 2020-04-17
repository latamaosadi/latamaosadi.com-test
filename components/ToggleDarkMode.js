import useDarkMode from 'use-dark-mode';
import { Sun, Moon } from 'react-feather';

const DarkModeToggle = (prop) => {
  const darkMode = useDarkMode(false, { classNameDark: 'mode-dark', classNameLight: 'mode-light' });

  return (
    <div>
      <button className={prop.className} onClick={darkMode.toggle}>
        <Sun className="dark:hidden" />
        <Moon className="hidden dark:block text-yellow-500" />
      </button>
    </div>
  );
};

export default DarkModeToggle;