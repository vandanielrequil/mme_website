import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import mme_logo from '../Images/mme_logo.png';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    menuLogo: {
        margin: '5px 20px 5px',
        width: '300px'
    }

}));

// Nor used Yet 
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const history = useHistory();
    const pageChange = useCallback((np) => history.push(np), [history])
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        function chosePage(num) {
            switch (num) {
                case 0: return '/news';
                case 1: return '/playground';
                case 2: return '/playground';
                case 3: return '/playground';
                default: return '/playground';
            }
        }
        pageChange(chosePage(newValue));
    };

    return (
        <>
            <AppBar position="sticky" variant="top20">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='secondary'
                    textColor="inherit"
                    variant="standard"
                    centered={true}
                    aria-label="full width tabs example"
                >
                    <Tab value={value} onClick={() => { handleChange('logoClick', 0); }} icon={<img src={mme_logo} alt='MME LOGO' className={classes.menuLogo} />} />
                    <Tab value={0} label="News" {...a11yProps(0)} />
                    <Tab value={1} label={"Cards & Staff"} {...a11yProps(1)} ></Tab>
                    <Tab value={2} label="Downloads" {...a11yProps(2)} />
                    <Tab value={3} label="About Project" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
        </>
    );
}
