import styled from 'styled-components';

export const Cell = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  box-shadow: 0 0 1px 1px rgba(52, 73, 94, 0.3);
  background-color: ${({ status }) => (status ? 'transparent' : '#dfe4ea')};
`;
