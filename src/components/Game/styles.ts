import styled from 'styled-components';
import { Box as MuiBox, Grid as MuiGrid } from '@material-ui/core';

export const Box = styled(MuiBox)`
  width: 100%;
  height: 100vh;
  color: #f1f2f6;
  background-color: #0c2461;
  padding: 30px 0;
`;

export const GridButtons = styled(MuiGrid)`
  margin: 30px 0;
`;
