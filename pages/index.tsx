import type { NextPage } from 'next';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/field/a-1">
        <a>Field</a>
      </Link>
      <br />
      <Link href="/editor">
        <a>editor</a>
      </Link>
    </div>
  );
};

export default Home;
