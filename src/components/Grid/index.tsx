import { Cell } from 'components/Cell';
import styles from './styles.module.scss';

interface IProps {
  grid: Array<Array<boolean>>;
  onGridCellClick: (e) => void;
}

export const Grid: React.FC<IProps> = ({ grid, onGridCellClick }): JSX.Element => {
  return (
    <div className={styles.grid}>
      {grid.map((rows, colIndex) => (
        <div key={colIndex} className={styles.gridColumn}>
          {rows.map((cellStatus, rowIndex) => (
            <Cell
              key={`${colIndex}-${rowIndex}`}
              id={`${colIndex}-${rowIndex}`}
              status={cellStatus}
              onGridCellClick={onGridCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
