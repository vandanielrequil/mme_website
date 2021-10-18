import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Playground from '../Playground';
import News from "../News";

import mme_logo from '../Images/mme_logo.png';


//import { makeStyles } from '@mui/material/styles';

// const styles = makeStyles((meTheme) => {

// })

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// Nor used Yet 
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return (
        <>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='secondary'
                    textColor="inherit"
                    variant="standard"
                    centered={true}
                    aria-label="full width tabs example"
                >
                    <Tab value={value} onClick={() => setValue(0)} icon={<img src={mme_logo} alt='MME LOGO' style={{ margin: '5px 20px 5px', width: '300px' }} />} />
                    <Tab value={0} label="News" {...a11yProps(0)} />
                    <Tab value={1} label="Cards & Staff" {...a11yProps(1)} ></Tab>
                    <Tab value={2} label="Downloads" {...a11yProps(2)} />
                    <Tab value={3} label="About Project" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
        </>
    );
}
