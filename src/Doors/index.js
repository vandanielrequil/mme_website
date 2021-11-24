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



const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        margin: '0 auto',
        width: '100%',
        opacity: '0.999',
    },
    mainContainer: {
        width: '1583px',
        margin: '0px auto 0',
        padding: '40px 50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    post: {
        position: 'relative',
        width: '100%',
        padding: '10px 20px 10px',
        marginBottom: '100px',
        backgroundColor: theme.palette.secondary.main,
        //border: `2px solid ${theme.palette.primary.main}`,
        boxShadow: '2px 2px 15px 1px rgba(0,0,0,0.6)',
        minHeight: '210px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        //orig 147x230
        margin: '5px',
        "--widthProp": '180px',
        width: 'var(--widthProp)',
        height: 'calc(var(--widthProp) * 1.56462585034)',
        backgroundColor: 'teal',

    }
}));

export default function Doors() {
    const classes = useStyles();
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>
            <div className={classes.post}>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
                <div className={classes.square}></div>
            </div>
        </div>
    </div>
}