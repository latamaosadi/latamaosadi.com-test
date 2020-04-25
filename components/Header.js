import Link from 'next/link';
import { Menu } from 'react-feather';
import DarkModeToggle from './ToggleDarkMode';
import React, { useEffect, useState, useRef } from 'react';

const nav = {
  fixed: 'fixed top-0 left-0 right-0 bg-yellow-300 dark:bg-gray-800',
  main:
    'flex h-16 items-center shadow-sm md:max-w-4xl md:mx-auto px-6 relative',
  link: 'p-2 text-gray-800 dark:text-gray-100',
  menu: {
    link:
      'px-4 md:px-2 py-2 md:py-3 text-blue-500 hover:bg-yellow-400 hover:text-blue-700 dark:text-yellow-400 dark-hover:bg-gray-700 transition duration-300 rounded-sm block',
  },
};

const Header = () => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    console.log('clicking anywhere');
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <nav className={nav.fixed}>
        <div className={nav.main}>
          <a
            className={`${nav.link} focus:outline-none md:hidden`}
            onClick={e => setOpen(! open)}
          >
            <Menu />
          </a>

          <Link href="/">
            <a
              className={`${nav.link} flex-1 text-center font-bold md:text-left md:order-first md:w-64 text-lg md:text-xl focus:outline-none`}
            >
              &lt;latamaosadi &#47;&gt;
            </a>
          </Link>

          <div
            className={`${
              open ? '' : 'hidden'
            } md:block absolute top-0 left-0 w-full md:w-auto md:relative md:mr-4`}
          >
            <ul
              ref={node}
              className="mt-16 md:mt-0 md:relative md:flex md:items-center text-sm bg-yellow-300 dark:bg-gray-800 md:bg-transparent border-t border-yellow-500 md:border-none shadow-md md:shadow-none font-bold"
            >
              <li>
                <Link href="/">
                  <a className={nav.menu.link}>Home</a>
                </Link>
              </li>
              <li className="md:ml-2">
                <Link href="/portfolio">
                  <a className={nav.menu.link}>Portfolio</a>
                </Link>
              </li>
              <li className="md:ml-2">
                <Link href="/projects">
                  <a className={nav.menu.link}>Projects</a>
                </Link>
              </li>
            </ul>
          </div>

          <DarkModeToggle className={`${nav.link} focus:outline-none flex items-center justify-center`} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
