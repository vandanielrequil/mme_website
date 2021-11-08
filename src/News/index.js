import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

import { useParams, useHistory } from 'react-router-dom';

import { initialLoad } from '../Store/newsSlice';
import { useDispatch, useSelector } from "react-redux";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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

const NewsData = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        // class newArticle {
        //     constructor(id, date, summary, text, img) {
        //         this.id = id;
        //         this.date = date;
        //         this.summary = summary;
        //         this.text = text;
        //         this.img = img;
        //     }
        // } 
        (async function fetchJson() {
            const jsonFile = await fetch('../news.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )
                .then(response => response.json());
            const newsArray = jsonFile.reverse();//.map((e) => new newArticle(e.id, e.date, e.summary, e.text, e.img));
            setData(newsArray);
            dispatch(initialLoad(newsArray));
        })();

    }, []);

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

const PaginationRanges = () => {
    const classes = useStyles();
    const history = useHistory();

    let { id } = useParams();
    const [pageId, setPageId] = useState(id);
    useEffect(() => {
        console.log(history);
        console.log(pageId);
    }, [pageId, history]);


    //const pageChange = useCallback((np) => history.push(np), [history]);
    const pageChange = (np) => history.push(np);
    function switchNewsPage(id) {
        if (id !== pageId) {
            setPageId(id);
            pageChange('news/' + id);
        }
    }


    return (
        <Stack spacing={2}>
            <Pagination onClick={() => switchNewsPage(2)} classes={{ ul: classes.ul }} count={6} defaultPage={1} color="primary" />
        </Stack>
    );
}

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