import React, { useState, useEffect/*, useCallback */ } from "react";
//import PropTypes from 'prop-types';

import { useParams, useHistory } from 'react-router-dom';

import { initialLoad, currentPage } from '../Store/doorsSlice';
import { useDispatch, useSelector } from "react-redux";

import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import PaginationRanges from '../Modules/PaginationRanges.js';

import doorExImg from '../Images/doors/door_example.png';


const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        margin: '0 auto',
        width: '100%',
        opacity: '0.999',
    },
    mainContainer: {
        width: '1583px',
        margin: '0px auto 0',
        padding: '80px 50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    post: {
        position: 'relative',
        width: '100%',
        padding: '20px',
        marginBottom: '100px',
        backgroundColor: `rgba(250,250,255,0.55)`,
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
        backgroundColor: `${theme.palette.primary.main}`,
        boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.6)'
    },
    imgDoor: {
        height: 'inherit',
        width: 'inherit'
    }
}));

const RenderCards = () => {
    const classes = useStyles(),
        renderArr = [];
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const currPage = useSelector(state => state.doorsReducer.doorsPage.curPgNum);

    useEffect(() => {
        /*
        fetch('../news.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(response => response.json())
            .then(r => r.reverse())
            .then(r => { dispatch(initialLoad(r)); return r })
            .then(r => { setData(r.slice(currPage * 4 - 4, currPage * 4)) })
        */

        dispatch(initialLoad([0, 1]));

    }, [currPage]);

    for (let i = 0; i < 14; i++) {
        renderArr.push(<div className={classes.square}><img className={classes.imgDoor} src={doorExImg} alt="" /></div>)
    }
    return renderArr;
}

export default function Doors() {
    const classes = useStyles();
    const objectAmount = useSelector(state => state.doorsReducer.doors.amount);
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>
            <div className={classes.post}>
                {RenderCards()}
                <PaginationRanges params={{ currentPage, objectAmount: 15, objectsPerPage: 14 }} />
            </div>
        </div>
    </div>
}