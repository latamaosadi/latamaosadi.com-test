import Layout from '../layouts/App';
import { ExternalLink } from 'react-feather';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <Layout>
      <div className="px-6 py-6">
        <h1 className="text-center text-lg md:text-2xl font-bold">
          Portfolio
        </h1>

        <div className="mt-8">
          <div className="flex items-center">
            <div className="text-2xl">
              <span>Jan 20</span>
            </div>
            <div className="ml-4">
              <h3 className="flex items-center font-bold">
                <Link href="/projects/tropik-lombok">Tropik Lombok Website</Link>{' '}
                <a
                  href="https://www.tropiklombok.com/"
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  <ExternalLink size={16} />
                </a>
              </h3>
              <p className="text-sm">Tropik Lombok company website</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
