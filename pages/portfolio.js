import Layout from '../layouts/App';
import { ExternalLink } from 'react-feather';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <Layout>
      <div className="px-6 py-6">
        <h1 className="text-center text-lg md:text-2xl font-bold">Portfolio</h1>

        <div className="mt-8">
          <div className="flex items-center">
            <div className="w-48">
              <img src="https://res.cloudinary.com/latamaosadi-com/image/upload/c_thumb,w_200,g_face/v1589731070/Projects/Tropik%20Lombok/landing_page.png" />
            </div>
            <div className="ml-4">
              <h3 className="flex items-center font-bold text-xl">
                <Link href="/projects/tropik-lombok">Tropik Lombok</Link>{' '}
                <a
                  href="https://www.tropiklombok.com/"
                  className="ml-2 text-blue-500 dark:text-yellow-400 hover:text-blue-700 dark-hover:text-yellow-600 transition duration-300"
                  target="_blank"
                >
                  <ExternalLink size={16} />
                </a>
              </h3>
              <p className="text-sm mt-2">
                Tropik Lombok villas development company website that works as a
                marketing tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
