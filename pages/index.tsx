import type { NextPage } from 'next';

import { Button } from 'src/components/Button';

const Home: NextPage = () => {
  return (
    <div>
      <h1>あたりめコーダー🦑</h1>
      <div className="text-9xl drop-shadow">🦑</div>
      <Button label="aaa" />
    </div>
  );
};

export default Home;
