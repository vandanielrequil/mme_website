import React, { useState, useEffect/*, useCallback */ } from "react";
//import PropTypes from 'prop-types';

import { initialLoad, currentPage } from '../Store/newsSlice';
import { useDispatch, useSelector } from "react-redux";

import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


import upLeft from '../Images/news/up_left.png';
import upRight from '../Images/news/up_right.png';
import bottomRight from '../Images/news/bottom_right.png';

import PaginationRanges from '../Modules/PaginationRanges.js';

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
    post: {
        position: 'relative',
        width: '100%',
        padding: '20px 30px 20px',
        marginBottom: '100px',
        backgroundColor: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        minHeight: '210px',
    },
    upLeft: {
        position: 'absolute',
        top: '-18px',
        left: '-62px',
    },
    upRight: {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
    },
    bottomRight: {
        position: 'absolute',
        bottom: '-50px',
        right: '-22px',
    },
    dateText: {
        fontSize: '0.9rem',
        fontStyle: 'italic',
        display: 'flex',
        justifyContent: 'flex-end',
    },

    // square: {
    //     '& :nth-child(4)': {
    //         backgroundColor: theme.palette.secondary.main,
    //         border: `2px solid ${theme.palette.primary.main}`,
    //     }
    // }
    // '@global': {
    //     'ul > li': {
    //         clipPath: 'circle(40%)',
    //         backgroundColor: theme.palette.secondary.main,
    //     },
    // },
    ul: {
        "& .MuiPaginationItem-root": {
            clipPath: 'circle(40%)',
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,

                fontWeight: '600'
            }
        }
    }
}));

const NewsData = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const currPage = useSelector(state => state.newsReducer.newsPage.curPgNum);

    useEffect(() => {
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
    }, [currPage]);

    return <React.Fragment>
        {data.map(e =>
            <div key={e.id} className={classes.post}>
                <div className={classes.upLeft}><img src={upLeft} alt='corner in ME style' /></div>
                <div className={classes.upRight}><img src={upRight} alt='corner in ME style' /></div>
                <div className={classes.bottomRight}><img src={bottomRight} alt='corner in ME style' /></div>
                <Typography>{e.text}</Typography>
                <Typography className={classes.dateText}>{e.date}</Typography>
            </div>
        )}
    </React.Fragment>
}
const News = () => {
    const objectAmount = useSelector(state => state.newsReducer.news.amount);
    const classes = useStyles();
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>

            <NewsData />
            <PaginationRanges params={{ currentPage, objectAmount, objectsPerPage: 4 }} />
        </div>
    </div>
}

export default News;