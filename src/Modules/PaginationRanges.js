/*
Use of this module outside
<PaginationRanges params={{ currentPage, objectAmount, objectsPerPage: 4 }} />
*/

import React, { useState, useEffect/*, useCallback */ } from "react";
//import PropTypes from 'prop-types';

import { useParams, useHistory } from 'react-router-dom';
//import { currentPage } from '../Store/newsSlice';           //Is exported by outter module
import { useDispatch } from "react-redux";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

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
    }
}));

const PaginationRanges = ({ params: { currentPage, objectAmount, objectsPerPage } }) => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    //const objectAmount = useSelector(state => state.news.newsNumber);     //Is exported by outter module
    const { location: { pathname } } = history;
    const { id: pageInitId } = useParams();
    const [pageId, setPageId] = useState(pageInitId);

    function nvl1Num(pageId) {
        let dp = (isNaN(parseInt(pageId))) ? 1 : parseInt(pageId);
        return dp;
    }

    useEffect(() => {
        dispatch(currentPage(nvl1Num(pageId)));
    }, []);

    function switchNewsPage(id) {
        let reg = /(\/\w+)(\/\d+)?/;
        let pageWithoutId = pathname.replace(reg, '$1');
        setPageId(id);
        history.push(pageWithoutId + '/' + id);
        dispatch(currentPage(id));
        window.scrollTo(0, 0);
    }

    return (
        <Stack spacing={2}>
            <Pagination onClick={(e) => switchNewsPage(e.target.textContent)} classes={{ ul: classes.ul }} count={Math.ceil(objectAmount / objectsPerPage)} page={nvl1Num(pageId)} color="primary" />
        </Stack>
    );
}

export default PaginationRanges;