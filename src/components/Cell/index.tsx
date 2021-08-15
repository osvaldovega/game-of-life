import * as S from './styles';

interface IProps {
  id: string;
  status: boolean;
  onGridCellClick: (e) => void;
}

export const Cell: React.FC<IProps> = ({ id, status, onGridCellClick }): JSX.Element => {
  return <S.Cell id={id} onClick={onGridCellClick} status={status}></S.Cell>;
};
