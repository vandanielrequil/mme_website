import React, { useState, useEffect/*, useCallback */ } from "react";
//import PropTypes from 'prop-types';

import { useParams, useHistory } from 'react-router-dom';

import { initialLoad, currentNewsPage } from '../Store/newsSlice';
import { useDispatch, useSelector } from "react-redux";

import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import upLeft from '../Images/news/up_left.png';
import upRight from '../Images/news/up_right.png';
import bottomRight from '../Images/news/bottom_right.png';

const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        margin: '0 auto',
        width: '100%',
        opacity: '0.999',
    },
    mainContainer: {
        width: '1280px',
        margin: '30px auto 0',
        padding: '50px ',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));



const Staff = () => {
    const classes = useStyles();
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>
            sdfasdfsdfsdfsdefsdf
        </div>
    </div>
}

export default Staff;