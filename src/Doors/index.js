import React, { useState, useEffect/*, useCallback */ } from "react";
//import PropTypes from 'prop-types';

import { useParams, useHistory } from 'react-router-dom';

import { initialLoad, currentPage } from '../Store/doorsSlice';
import { useDispatch, useSelector } from "react-redux";

//import Typography from '@mui/material/Typography';
//import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { PaginationRanges, PageLeft, PageRight } from '../Modules/PaginationRanges.js';

import doorExImg from '../Images/doors/door_example.png';
import arrowLeft from '../Images/doors/arrow_left.png';



const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        margin: '0 auto',
        //width: '100%',
        opacity: '0.999',
        "--widthDoor": '180px',
        "--heightDoor": 'calc(var(--widthDoor) * 1.56462585034)'
    },
    mainContainer: {
        maxWidth: '1583px',
        margin: '0px auto 0',
        padding: '80px 50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    postWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '50px'
    },
    post: {
        position: 'relative',
        width: '100%',
        padding: '20px',
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
        margin: '10px 5px',
        width: 'var(--widthDoor)',
        height: 'var(--heightDoor)',
        backgroundColor: `${theme.palette.primary.main}`,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative'

    },
    imgDoor: {
        transition: 'height 0.3s, width 0.3s, top 0.3s',
        height: 'inherit',
        width: 'inherit',
        boxShadow: '1px 2px 5px 0px rgba(0,0,0,0.6)',
        top: '0px',
        '&:hover': {
            position: 'absolute',
            top: '-5px',
            height: 'calc(var(--heightDoor) + 5%)',
            width: 'calc(var(--widthDoor) + 5%)',
            transition: 'height 0.3s, width 0.3s, top 0.3s'
        }
    },
    arrow: {
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35px',
        height: '80px',
        backgroundColor: `rgba(250,250,255,0.3)`,
        '&:hover': {
            backgroundColor: `${theme.palette.secondary.blood}`,
        }
    },
    arrowRight: {
        transform: 'rotate(0.5turn)'
    }
}));

const RenderCards = () => {
    const classes = useStyles(),
        renderArr = [];
    const [pageObjects, setpageObjects] = useState([]);
    const dispatch = useDispatch();
    const currPage = useSelector(state => state.doorsReducer.doorsPage.curPgNum);

    useEffect(() => {
        fetch('../doors.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(response => response.json())
            .then(r => { return r.filter(e => e.type === 'door') })  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            .then(r => { dispatch(initialLoad(r)); return r })
            .then(r => { setpageObjects(r.slice(currPage * 14 - 14, currPage * 14)) }); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    }, [currPage]);

    for (let e of pageObjects) {
        renderArr.push(<div className={classes.square}><img className={classes.imgDoor} src={'../cards/' + e.imgL} alt="" /></div>) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    return renderArr;


}


export default function Doors() {
    const classes = useStyles();
    const objectAmount = useSelector(state => state.doorsReducer.doors.amount);
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>
            <div className={classes.postWrapper}>
                <PageLeft params={{ currentPage }} />
                <div className={classes.post}>{RenderCards()}</div>
                <PageRight params={{ currentPage, objectAmount: 20, objectsPerPage: 14 }} />
            </div>
            <PaginationRanges params={{ currentPage, objectAmount: 20, objectsPerPage: 14 }} />
        </div>
    </div>
}