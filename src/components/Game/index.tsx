import { useState, useCallback, useRef } from 'react';
import { initial2DGrid, update2DGrid, update2DGridOnRunning } from 'utils/game';
import { NUMBER_OF_COLS, NUMBER_OF_ROWS, ALIVE, DEAD } from 'utils/constants';
import { Grid } from 'components/Grid';
import styles from './styles.module.scss';

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
    <div className={styles.wrapper}>
      <h3>Game of Life of John Conway's</h3>

      <button type="button" onClick={handleStartStopGame}>
        {isGameRunning ? 'Stop' : 'Start'}
      </button>

      <button type="button" onClick={handleResetGrid}>
        Reset
      </button>

      <div className={styles.grid}>
        <Grid grid={grid} onGridCellClick={handleCellClick} />
      </div>
    </div>
  );
};
