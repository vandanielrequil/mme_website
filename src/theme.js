import { createTheme } from '@mui/material/styles';

const meTheme = createTheme(
    {
        palette: {
            primary: {
                main: '#4d9aca',
                light: '#cfebf5',
                dark: '#234968',
            },
            secondary: {
                main: '#f1f1f2',
                light: '#fafaff',
                dark: '#f4eade',
                blood: '#98191c',
                omni: '#e29930',

            },
        },
        components: {
            MuiAppBar: {
                variants: [
                    {
                        props: { variant: 'top20' },
                        style: {
                            top: '20px',
                        },
                    },
                ],
            },
        },
    }
);

export default meTheme;