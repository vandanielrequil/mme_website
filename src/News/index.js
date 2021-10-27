import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import newsJson from './news.json';

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

const News = () => {

    const [data, setData] = useState([]);


    async function fetchJson() {
        const jsonFile = await fetch('./news.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(response => response.json());
        setData(jsonFile);
    }

    useEffect(() => { fetchJson() }, []);

    class newArticle {
        constructor(id, date, summary, text, img) {
            this.id = id;
            this.date = date;
            this.summary = summary;
            this.text = text;
            this.img = img;
        }
    }

    const newsArray = data.map((e, i) => new newArticle(e.id, e.date, e.summary, e.text, e.img));

    return <div>
        {newsArray.map(e => <div>{e.Text}</div>)}
    </div>

}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const PaginationRanges = () => {
    const classes = useStyles();
    return (
        <Stack spacing={2}>
            {/* <Pagination count={11} defaultPage={6} siblingCount={0} /> */}
            <Pagination classes={{ ul: classes.ul }} count={6} defaultPage={1} color="primary" />
            {/* <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} /> */}
            {/* <Pagination count={11} defaultPage={6} boundaryCount={2} /> */}
        </Stack>
    );
}

const UpdatesPage = () => {
    const classes = useStyles();
    return <div className={classes.pageWrapper}>
        <div className={classes.mainContainer}>
            <div className={classes.post}>
                <div className={classes.upLeft}><img src={upLeft} alt='corner in ME style' /></div>
                <div className={classes.upRight}><img src={upRight} alt='corner in ME style' /></div>
                <div className={classes.bottomRight}><img src={bottomRight} alt='corner in ME style' /></div>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla </Typography>
            </div>
            <div className={classes.post}>
                <div className={classes.upLeft}><img src={upLeft} alt='corner in ME style' /></div>
                <div className={classes.upRight}><img src={upRight} alt='corner in ME style' /></div>
                <div className={classes.bottomRight}><img src={bottomRight} alt='corner in ME style' /></div>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla </Typography>
            </div>
            <div className={classes.post}>
                <div className={classes.upLeft}><img src={upLeft} alt='corner in ME style' /></div>
                <div className={classes.upRight}><img src={upRight} alt='corner in ME style' /></div>
                <div className={classes.bottomRight}><img src={bottomRight} alt='corner in ME style' /></div>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla </Typography>
            </div>
            <div className={classes.post}>
                <div className={classes.upLeft}><img src={upLeft} alt='corner in ME style' /></div>
                <div className={classes.upRight}><img src={upRight} alt='corner in ME style' /></div>
                <div className={classes.bottomRight}><img src={bottomRight} alt='corner in ME style' /></div>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo possimus in reprehenderit id laudantium? Laudantium, quos! Nobis fugit cum voluptate illo magni dolores, numquam unde ducimus omnis iste dolorem aspernatur fuga nostrum delectus, at sit animi? Ea iusto itaque asperiores labore mollitia aspernatur, perferendis nam inventore, aliquam autem consequuntur eum voluptas amet quidem illo a quasi quia, blanditiis quibusdam fugiat beatae molestias pariatur? Sint, neque fugit culpa adipisci dolorem similique iste dolore harum optio nulla molestias deserunt laborum nemo nisi non qui fugiat corrupti necessitatibus eligendi! Sunt id alias obcaecati, dolor excepturi modi nulla </Typography>
            </div>
            <News />
            <PaginationRanges />
        </div>
    </div>
}

export default UpdatesPage