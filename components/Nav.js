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
    'flex items-center text-blue-500 font-bold hover:bg-yellow-300 hover:text-blue-700 dark:text-yellow-400 dark-hover:bg-gray-800 transition duration-300',
};

const Nav = () => (
  <div>
    <div className={nav.fixed}>
      <ul className="text-sm">
        <li>
          <a className={nav.link} href="mailto:robert@latamaosadi.com">
            <Mail />
            <span className="ml-2">robert@latamaosadi.com</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://t.me/latamaosadi"
            target="_blank"
          >
            <Send />
            <span className="ml-2">t.me/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.github.com/latamaosadi"
            target="_blank"
          >
            <GitHub />
            <span className="ml-2">github.com/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://codesandbox.io/u/latamaosadi"
            target="_blank"
          >
            <Codesandbox />
            <span className="ml-2">codesandbox.com/u/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.linkedin.com/in/latamaosadi"
            target="_blank"
          >
            <Linkedin />
            <span className="ml-2">linkedin.com/in/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.twitter.com/RobertLata"
            target="_blank"
          >
            <Twitter />
            <span className="ml-2">twitter.com/RobertLata</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.facebook.com/latamaosadi"
            target="_blank"
          >
            <Facebook />
            <span className="ml-2">facebook.com/latamaosadi</span>
          </a>
        </li>
        <li className="mt-6">
          <a
            className={nav.link}
            href="https://www.instagram.com/latamaosadi"
            target="_blank"
          >
            <Instagram />
            <span className="ml-2">instagram.com/latamaosadi</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
