import {
  Instagram,
  Send,
  Facebook,
  GitHub,
  Linkedin,
  Twitter,
  Mail,
  Codesandbox,
} from 'react-feather';

const nav = {
  fixed: 'p-6',
  main: '',
  link:
    'flex items-center text-blue-500 font-bold hover:bg-yellow-300 hover:text-blue-700 dark:text-yellow-400 dark-hover:bg-gray-800 transition duration-300 text-xs sm:text-base',
};

const Nav = () => (
  <div>
    <div className={nav.fixed}>
      <ul className="text-sm">
        <li>
          <a className={nav.link} href="mailto:robert@latamaosadi.com">
            <Mail className="flex-shrink-0" />
            <span className="ml-2 truncate truncate">
              robert@latamaosadi.com
            </span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://t.me/latamaosadi"
            target="_blank"
          >
            <Send className="flex-shrink-0" />
            <span className="ml-2 truncate">t.me/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.github.com/latamaosadi"
            target="_blank"
          >
            <GitHub className="flex-shrink-0" />
            <span className="ml-2 truncate">github.com/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://codesandbox.io/u/latamaosadi"
            target="_blank"
          >
            <Codesandbox className="flex-shrink-0" />
            <span className="ml-2 truncate">codesandbox.com/u/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.linkedin.com/in/latamaosadi"
            target="_blank"
          >
            <Linkedin className="flex-shrink-0" />
            <span className="ml-2 truncate">linkedin.com/in/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.twitter.com/RobertLata"
            target="_blank"
          >
            <Twitter className="flex-shrink-0" />
            <span className="ml-2 truncate">twitter.com/RobertLata</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.facebook.com/latamaosadi"
            target="_blank"
          >
            <Facebook className="flex-shrink-0" />
            <span className="ml-2 truncate">facebook.com/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.instagram.com/latamaosadi"
            target="_blank"
          >
            <Instagram className="flex-shrink-0" />
            <span className="ml-2 truncate">instagram.com/latamaosadi</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
