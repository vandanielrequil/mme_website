import React from "react";
import PropTypes from 'prop-types';

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
}));


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
    return (
        <Stack spacing={2}>
            {/* <Pagination count={11} defaultPage={6} siblingCount={0} /> */}
            <Pagination count={11} defaultPage={6} />
            {/* <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} /> */}
            {/* <Pagination count={11} defaultPage={6} boundaryCount={2} /> */}
        </Stack>
    );
}

const UpdatesPage = () => {
    const classes = useStyles();
    console.log(classes);
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
            <PaginationRanges />
        </div>
    </div>
}

export default UpdatesPage