import { AppProps } from 'next/app';
import { Meta } from 'components/Meta';
import StyledProvider from 'utils/styledProvider';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Meta
        title="Game of Life of John Conway's"
        keywords="game of life, John Conway's, nextjs, react, typescript, game"
        description="The game of live of John Conway's build in Nextjs and typescript"
      />
      <StyledProvider>
        <Component {...pageProps} />
      </StyledProvider>
    </>
  );
}

export default App;
