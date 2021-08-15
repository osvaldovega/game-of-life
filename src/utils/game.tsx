import produce from 'immer';
import { ALIVE, DEAD, NEIGHBOARDS_MAP, NUMBER_OF_COLS, NUMBER_OF_ROWS } from './constants';

/**
 *  Grid Type
 */
type Grid = Array<Array<boolean>>;

/**
 *  initial2DGrid
 * @param {number} numberOfCols - The amount of columns to show
 * @param {number} numberOfRows - The amount of rows to show
 * @returns {boolean[][]} - An array of arrays with a boolean value for each cell
 */
export const initial2DGrid = (numberOfCols: number, numberOfRows: number): Grid => {
  const cells: Grid = [];

  for (let columnIndex = 0; columnIndex < numberOfCols; columnIndex++) {
    cells.push(Array.from(Array(numberOfRows), () => DEAD));
  }

  return cells;
};

/**
 * update2DGrid
 * @param currentGrid - Grid with the current values
 * @param {string} cellId - Cell ID, that contains column and row index values
 * @returns newGrid - new updated Grid
 */
export const update2DGrid = (currentGrid: Grid, cellId: string): Grid => {
  const [colIndex, rowIndex] = cellId.split('-');

  return produce(currentGrid, (draftGrid) => {
    draftGrid[colIndex][rowIndex] = currentGrid[colIndex][rowIndex] ? DEAD : ALIVE;
  });
};

/**
 * countCellNeighboards
 * @param grid - Game current Grid
 * @param column - Column index
 * @param row - Row index
 * @returns {number} - total amount of neighboards of specific cell
 */
const countCellNeighboards = (grid: Grid, column: number, row: number): number => {
  let amountOfNeighboards: number = 0;

  NEIGHBOARDS_MAP.forEach(([colIndex, rowIndex]) => {
    const newColumn = column + colIndex;
    const newRow = row + rowIndex;

    if (newColumn >= 0 && newColumn < NUMBER_OF_COLS && newRow >= 0 && newRow < NUMBER_OF_ROWS) {
      amountOfNeighboards += grid[newColumn][newRow] ? 1 : 0;
    }
  });

  return amountOfNeighboards;
};

/**
 * update2DGridOnRunning
 * @param grid - Current Grid
 * @returns - A new Grid after update
 */
export const update2DGridOnRunning = (grid: Grid): Grid =>
  produce(grid, (draftGrid) => {
    for (let column = 0; column < NUMBER_OF_COLS; column++) {
      for (let row = 0; row < NUMBER_OF_ROWS; row++) {
        const currentCellStatus = grid[column][row];

        const totalAmountOfNeighboards = countCellNeighboards(grid, column, row);

        if (totalAmountOfNeighboards < 2 || totalAmountOfNeighboards > 3) {
          draftGrid[column][row] = DEAD;
        }
        if (!currentCellStatus && totalAmountOfNeighboards === 3) {
          draftGrid[column][row] = ALIVE;
        }
      }
    }
  });
