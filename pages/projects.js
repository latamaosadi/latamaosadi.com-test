import Layout from '../layouts/App';
import { ExternalLink } from 'react-feather';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <Layout>
      <div className="px-6 py-6">
        <h1 className="text-center text-lg md:text-2xl font-bold">
          My Projects
        </h1>

        <div className="mt-8">
        </div>
      </div>
    </Layout>
  );
}
