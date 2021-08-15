import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  background-color: #1e272e;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const Frost = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  padding: 30px;
  z-index: 1;
  box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
`;
