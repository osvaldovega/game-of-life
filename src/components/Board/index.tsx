import { Cell } from 'components/Cell';
import * as S from './styles';

interface IProps {
  grid: Array<Array<boolean>>;
  onGridCellClick: (e) => void;
}

export const Board: React.FC<IProps> = ({ grid, onGridCellClick }): JSX.Element => {
  return (
    <S.Frost>
      <S.Board>
        {grid.map((rows, colIndex) => (
          <S.Columns key={colIndex}>
            {rows.map((cellStatus, rowIndex) => (
              <Cell
                key={`${colIndex}-${rowIndex}`}
                id={`${colIndex}-${rowIndex}`}
                status={cellStatus}
                onGridCellClick={onGridCellClick}
              />
            ))}
          </S.Columns>
        ))}
      </S.Board>
    </S.Frost>
  );
};
