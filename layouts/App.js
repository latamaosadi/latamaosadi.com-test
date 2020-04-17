import Header from '../components/Header';
import Nav from '../components/Nav';
import Head from 'next/head';

const page = {
  main: 'container mx-auto md:mx-0',
};

const Layout = (props) => (
  <div>
    <Head>
      <title>Robert Latamaosadi - latamaosadi.com</title>
      <link rel="shortcut icon" href="https://res.cloudinary.com/latamaosadi-com/image/upload/c_scale,h_32/v1586863340/avatar.ico"></link>
      <meta name="theme-color" content="#faf089"></meta>
    </Head>
    <div className="font-mono bg-yellow-100 dark:bg-gray-900 min-h-screen pt-20 text-gray-900 dark:text-gray-300">
      <Header />
      <main className="md:flex md:max-w-4xl md:mx-auto">
        <div className={page.main}>{props.children}</div>
        <div className="container mx-auto md:order-first md:mx-0 md:w-auto">
          <Nav />
        </div>
      </main>
      <footer className="text-center mt-4 text-sm px-12 py-8">
        <p>
          <span className="text-lg">&copy;</span> 2020 Robert Latamaosadi.
        </p>
        <p className="mt-1">
          Built with{' '}
          <a
            className="font-bold text-blue-500"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </a>{' '}
          & proudly hosted on{' '}
          <a
            className="font-bold text-blue-500"
            href="https://zeit.co/"
            target="_blank"
          >
            ZEIT Now.
          </a>
        </p>
      </footer>
    </div>
  </div>
);

export default Layout;
