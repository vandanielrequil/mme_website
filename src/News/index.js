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
        height: '100vh',
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

const PaginationRanges = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const newsNumber = useSelector(state => state.news.newsNumber);

    const { location: { pathname } } = history;
    const { id: pageInitId } = useParams();
    const [pageId, setPageId] = useState(pageInitId);

    function nvl1Num(pageId) {
        let dp = (isNaN(parseInt(pageId))) ? 1 : parseInt(pageId);
        return dp;
    }

    useEffect(() => {
        dispatch(currentNewsPage(nvl1Num(pageId)));
        // console.log(pathname);
        // console.log('pageInitId  ' + pageId);
        //console.log('pageId  ' + pageId);
    }, []);

    function switchNewsPage(id) {
        let reg = /(\/\w+)(\/\d+)?/;
        let pageWithoutId = pathname.replace(reg, '$1');
        setPageId(id);
        history.push(pageWithoutId + '/' + id);
        console.log(id);
        dispatch(currentNewsPage(id));
    }



    return (
        <Stack spacing={2}>
            <Pagination onClick={(e) => switchNewsPage(e.target.textContent)} classes={{ ul: classes.ul }} count={Math.ceil(newsNumber / 4)} page={nvl1Num(pageId)} color="primary" />
        </Stack>
    );
}

const NewsData = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const currPage = useSelector(state => state.page.curPgNum);

    let { id: pageInitId } = useParams();
    const [pageId, setPageId] = useState(pageInitId);
    // useEffect(() => {
    //     console.log('pageInitId  ' + pageInitId);
    //     console.log('pageId  ' + pageId);
    // }, [pageInitId, pageId]);

    useEffect(() => {
        console.log('pageeeeeeeeeeeeeeee ' + currPage);
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

    return <div>
        {data.map(e =>
            <div key={e.id} className={classes.post}>
                <div className={classes.upLeft}><img src={upLeft} alt='corner in ME style' /></div>
                <div className={classes.upRight}><img src={upRight} alt='corner in ME style' /></div>
                <div className={classes.bottomRight}><img src={bottomRight} alt='corner in ME style' /></div>
                <Typography>{e.text}</Typography>
                <Typography className={classes.dateText}>{e.date}</Typography>
            </div>
        )}
    </div>
}

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

const News = () => {
    const classes = useStyles();
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>

            <NewsData />
            <PaginationRanges />
        </div>
    </div>
}

export default News;