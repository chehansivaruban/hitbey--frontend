import React from 'react';

import { Link, Typography, Stack, useTheme, ListItem, ListItemIcon, ListItemText, Divider, useMediaQuery } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/styles';
import { NAVIGATION_ROUTES } from '../../routes/constant/RoutesConstant';

const useStyles = makeStyles((theme) => ({
    typographyClass: {
        color: theme.palette.primary.contrastText
    }
}));

const AuthFooter = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Stack
                spacing={2}
                direction={matchDownSM ? 'column' : 'row'}
                justifyContent="space-between"
                sx={{ backgroundColor: theme.palette.primary.main, borderTopRightRadius: 15, borderTopLeftRadius: 15, p: 5 }}
            >
                <Stack direction={matchDownSM ? 'row' : 'column'}>
                    <Typography className={classes.typographyClass}>Connect With us</Typography>
                    <ListItem>
                        <ListItemIcon>
                            <FacebookIcon />
                        </ListItemIcon>
                        {!matchDownSM && <ListItemText primary={<Typography className={classes.typographyClass}>Facebook</Typography>} />}
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InstagramIcon />
                        </ListItemIcon>
                        {!matchDownSM && <ListItemText primary={<Typography className={classes.typographyClass}>Instagram</Typography>} />}
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <YouTubeIcon />
                        </ListItemIcon>
                        {!matchDownSM && <ListItemText primary={<Typography className={classes.typographyClass}>Youtube</Typography>} />}
                    </ListItem>
                </Stack>
                <Stack direction={'column'}>
                    <Typography className={classes.typographyClass}>Help and support</Typography>
                    <Typography variant="subtitle2" className={classes.typographyClass} sx={{ mt: 1, ml: 2 }}>
                        FAQs
                    </Typography>
                    <Typography variant="subtitle2" className={classes.typographyClass} sx={{ ml: 2 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="subtitle2" className={classes.typographyClass} sx={{ ml: 2 }}>
                        Report
                    </Typography>
                    <Typography variant="subtitle2" className={classes.typographyClass} sx={{ ml: 2 }}>
                        Feedback
                    </Typography>
                    <Typography variant="subtitle2" className={classes.typographyClass} sx={{ ml: 2 }}>
                        Learn to post
                    </Typography>
                </Stack>
                <Stack direction={'column'}>
                    <Typography className={classes.typographyClass}>Legal</Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ mt: 1, ml: 2 }}>
                        Terms and conditions
                    </Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ ml: 2 }}>
                        Privacy Policy
                    </Typography>
                </Stack>
                <Stack direction={'column'}>
                    <Typography className={classes.typographyClass}>About</Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ mt: 1, ml: 2 }}>
                        Our story
                    </Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ ml: 2 }}>
                        Benefits
                    </Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ ml: 2 }}>
                        Team
                    </Typography>
                </Stack>
                <Stack direction={'column'}>
                    <Typography className={classes.typographyClass}>Contact</Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ mt: 1, ml: 2 }}>
                        sample@email.com
                    </Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ ml: 2 }}>
                        Company Name
                    </Typography>
                    <Typography variant={'subtitle2'} className={classes.typographyClass} sx={{ ml: 2 }}>
                        sample address
                    </Typography>
                </Stack>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="center" sx={{ backgroundColor: theme.palette.primary.main, p: 2 }}>
                <Typography variant="body2" color="white" align="center">
                    {'Copyright © ' + new Date().getFullYear() + ' '}
                    <Link color="inherit" component={RouterLink} to={NAVIGATION_ROUTES.home}>
                        {'HITbey'}
                    </Link>
                    {'. All rights reserved.'}
                </Typography>
            </Stack>
        </>
    );
};

export default AuthFooter;
