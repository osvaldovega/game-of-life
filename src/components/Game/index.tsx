import { useState, useCallback, useRef } from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { initial2DGrid, update2DGrid, update2DGridOnRunning } from 'utils/game';
import { NUMBER_OF_COLS, NUMBER_OF_ROWS, ALIVE, DEAD } from 'utils/constants';
import { Board } from '../Board';
import * as S from './styles';

export const Game: React.FC = (): JSX.Element => {
  const [grid, setGrid] = useState(initial2DGrid(NUMBER_OF_COLS, NUMBER_OF_ROWS));
  const [isGameRunning, setGameRunning] = useState(DEAD);
  const gameStatusRef = useRef(isGameRunning);

  gameStatusRef.current = isGameRunning;

  const handleCellClick = ({ target: { id } }) => {
    setGrid((prevGrid) => update2DGrid(prevGrid, id));
  };

  const handleStartStopGame = () => {
    setGameRunning(!isGameRunning);

    if (!isGameRunning) {
      gameStatusRef.current = ALIVE;
      handleRunSimulation();
    }
  };

  const handleResetGrid = () => {
    setGameRunning(DEAD);
    setGrid(initial2DGrid(NUMBER_OF_COLS, NUMBER_OF_ROWS));
  };

  const handleRunSimulation = useCallback(() => {
    if (!gameStatusRef.current) return;
    setGrid((prevGrid) => update2DGridOnRunning(prevGrid));
    setTimeout(handleRunSimulation, 100);
  }, []);

  return (
    <S.Box>
      <Container maxWidth="lg">
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h2">Game of Life of John Conway&apos;s</Typography>
          </Grid>

          <S.GridButtons container item justifyContent="space-evenly" alignItems="center">
            <Button variant="outlined" color="secondary" onClick={handleStartStopGame}>
              <Typography>{isGameRunning ? 'Stop' : 'Start'}</Typography>
            </Button>

            <Button variant="outlined" color="secondary" onClick={handleResetGrid}>
              <Typography>Reset</Typography>
            </Button>
          </S.GridButtons>

          <Grid item>
            <Board grid={grid} onGridCellClick={handleCellClick} />
          </Grid>
        </Grid>
      </Container>
    </S.Box>
  );
};
