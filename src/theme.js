import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const meTheme = createTheme(
    {
        palette: {
            primary: {
                main: blueGrey[500],
                light: blueGrey[100],
            },
            secondary: {
                main: '#fafaff', //ghostWhite
                light: '#FF0000' //
            },
        },
    }
);

export default meTheme;