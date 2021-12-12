import React, { useState, useEffect/*, useCallback */ } from "react";
//import PropTypes from 'prop-types';

import { useParams, useHistory } from 'react-router-dom';
//import { currentPage } from '../Store/newsSlice';           //Is exported by outter module
import { useDispatch } from "react-redux";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import arrowLeft from '../Images/doors/arrow_left.png';



const useStyles = makeStyles((theme) => ({
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

/*
Use of this module outside
<PaginationRanges params={{ currentPage, objectAmount, objectsPerPage: 4 }} />
*/
export const PaginationRanges = ({ params: { currentPage, objectAmount, objectsPerPage } }) => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    //const objectAmount = useSelector(state => state.news.newsNumber);     //Is exported by outter module
    const { location: { pathname } } = history;
    const { id: pageInitId } = useParams();
    const [pageId, setPageId] = useState(parseInt(pageInitId));

    function nvl1Num(pageId) {
        let dp = (isNaN(parseInt(pageId))) ? 1 : parseInt(pageId);
        return dp;
    }

    useEffect(() => {
        dispatch(currentPage(nvl1Num(pageId)));
    }, []);

    function switchPage(idParam, type) {
        //Type used when arrow clicked
        if (!idParam && !type) {
            return false
        }
        let id = parseInt(idParam);
        if (type === 'NavigateBeforeIcon') {
            if (pageId > 1) {
                id = pageId - 1
            }
        }
        else if (type === 'NavigateNextIcon' && !pageId) {
            id = 1;
        }
        else if (type === 'NavigateNextIcon') {
            id = pageId + 1;
        }
        const reg = /(\/\w+)(\/\d+)?/;
        const pageWithoutId = pathname.replace(reg, '$1');
        setPageId(parseInt(id));
        history.push(pageWithoutId + '/' + id);
        dispatch(currentPage(id));
        window.scrollTo(0, 0);
    }

    return (
        <Stack spacing={2}>
            <Pagination onClick={(e) => switchPage(e.target.textContent, e.target.getAttribute('data-testid'))} classes={{ ul: classes.ul }} count={Math.ceil(objectAmount / objectsPerPage)} page={nvl1Num(pageId)} color="primary" />
        </Stack>
    );
}

export const PageLeft = ({ params: { currentPage } }) => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    //const objectAmount = useSelector(state => state.news.newsNumber);     //Is exported by outter module
    const { location: { pathname } } = history;
    const { id: pageInitId } = useParams();
    const [pageId, setPageId] = useState(parseInt(pageInitId));

    function nvl1Num(pageId) {
        let dp = (isNaN(parseInt(pageId))) ? 1 : parseInt(pageId);
        return dp;
    }

    useEffect(() => {
        dispatch(currentPage(nvl1Num(pageId)));
    }, [pageId]);
    console.log(nvl1Num(pageId));
    function switchPageLeft() {
        console.log(pageId);
        if (pageId > 1) {
            let id = pageId - 1;
            const reg = /(\/\w+)(\/\d+)?/;
            const pageWithoutId = pathname.replace(reg, '$1');
            setPageId(parseInt(id));
            history.push(pageWithoutId + '/' + id);
            dispatch(currentPage(id));
            window.scrollTo(0, 0);
            return true;
        }
        return false;
    }

    return (
        <div className={classes.arrow} onClick={e => switchPageLeft()} ><img src={arrowLeft} alt='left arrow' /> </div>
    );
}

export const PageRight = ({ params: { currentPage, objectAmount, objectsPerPage } }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    //const objectAmount = useSelector(state => state.news.newsNumber);     //Is exported by outter module
    const { location: { pathname } } = history;
    const { id: pageInitId } = useParams();
    const [pageId, setPageId] = useState(parseInt(pageInitId));


    function nvl1Num(pageId) {
        let dp = (isNaN(parseInt(pageId))) ? 1 : parseInt(pageId);
        return dp;
    }

    useEffect(() => {
        dispatch(currentPage(nvl1Num(pageId)));
    }, []);

    function switchPageLeft() {
        console.log(pageId);
        if (pageId < Math.ceil(objectAmount / objectsPerPage)) {
            let id = pageId + 1;
            const reg = /(\/\w+)(\/\d+)?/;
            const pageWithoutId = pathname.replace(reg, '$1');
            setPageId(parseInt(id));
            history.push(pageWithoutId + '/' + id);
            dispatch(currentPage(id));
            window.scrollTo(0, 0);
            return true;
        }
        console.log('PAGE wasnt LEFT');
        return false;
    }

    return (
        <div onClick={e => switchPageLeft()} className={classes.arrow + ' ' + classes.arrowRight} ><img src={arrowLeft} alt='right arrow' /> </div>
    );
}


export default PaginationRanges;