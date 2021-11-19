import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import { Tabs, Tab } from '@mui/material/';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { makeStyles } from '@mui/styles';
import './styles.css';

import mme_logo from '../Images/mme_logo.png';


const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: `0px 2px 13px ${theme.palette.primary.dark}`
    },
    menuLogo: {
        margin: '5px 20px 5px',
        width: '300px',
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
    const { location: { pathname } } = history;
    const classes = useStyles();


    const reg = /\/(\w+)(\/\d+)?/;
    let curPgId, pageWithoutId = pathname.replace(reg, '$1');
    switch (pageWithoutId) {
        case 'news': curPgId = 0; break;
        case 'staff': curPgId = 1; break;
        case 'playground': curPgId = 2; break;
        default: curPgId = 0;
    }

    const [value, setValue] = React.useState(curPgId);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        function chosePage(num) {
            switch (num) {
                case 0: return '/news';
                case 1: return 'stay_on_page'; //'/staff';
                case 2: return '/playground';
                case 3: return '/playground';
                default: return '/playground';
            }
        }

        if (chosePage(newValue) !== 'stay_on_page') {
            pageChange(chosePage(newValue))
        }
        return true;
    };

    //Menu subtabs
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function subMenuPageClick(num) {
        function path(num) {
            switch (num) {
                case 0: return '/Doors';
                case 1: return '/Treasures';
                case 2: return '/Locations';
                case 3: return '/Classes';
                case 4: return '/Rules';
                default: return '/Doors';
            }
        };
        pageChange(path(num));
    }

    //------------------
    return (
        <>
            <AppBar className={classes.appBar} position="sticky" variant="top20">
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
                    <Tab value={1} label="Cards & Staff" onClick={handleClick} {...a11yProps(1)} />
                    <Tab value={2} label="Downloads" {...a11yProps(2)} />
                    <Tab value={3} label="About Project" {...a11yProps(3)} />
                </Tabs>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => subMenuPageClick(0)}>Doors</MenuItem>
                    <MenuItem onClick={() => subMenuPageClick(1)}>Treasures</MenuItem>
                    <MenuItem onClick={() => subMenuPageClick(2)}>Locations</MenuItem>
                    <MenuItem onClick={() => subMenuPageClick(3)}>Classes</MenuItem>
                    <MenuItem onClick={() => subMenuPageClick(4)}>Rules</MenuItem>
                </Menu>
            </AppBar>
        </>
    );
}



