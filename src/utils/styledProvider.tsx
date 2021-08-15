import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';

interface IProps {
  children?: React.ReactNode;
}

const StyledProvider: React.FC<IProps> = ({ children }): JSX.Element => (
  <StylesProvider injectFirst>
    <CssBaseline />
    {children}
  </StylesProvider>
);

export default StyledProvider;
