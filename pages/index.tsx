import type { NextPage } from 'next';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/map/1-1">
        <a>map</a>
      </Link>
      <br />
      <Link href="/editor">
        <a>editor</a>
      </Link>
    </div>
  );
};

export default Home;
