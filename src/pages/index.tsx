import { NextPage } from 'next';
import { Meta } from 'components/Meta';
import { Game } from 'components/Game';

const Main: NextPage = () => {
  return (
    <div>
      <Meta
        title="Game of Life of John Conway's"
        keywords="game of life, John Conway's, nextjs, react, typescript, game"
        description="The game of live of John Conway's build in Nextjs and typescript"
      />
      <Game />
    </div>
  );
};

export default Main;
