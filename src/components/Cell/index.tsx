import styles from './styles.module.scss';

interface IProps {
  id: string;
  status: boolean;
  onGridCellClick: (e) => void;
}

export const Cell: React.FC<IProps> = ({ id, status, onGridCellClick }): JSX.Element => {
  return (
    <div
      id={id}
      className={`${styles.cell} ${status ? styles.cellLive : styles.cellDead}`}
      onClick={onGridCellClick}
    ></div>
  );
};
