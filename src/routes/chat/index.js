import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const message = `Truncation should be conditionally applicable on this long line of text
   as this is a much longer line than what the container can support. `;


const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    item: {
        margin: '5px 10px 20px 10px;',
    }
}));
const Page = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" align="center">
                        Chat con @Nickname
                </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                    >
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                            className={classes.item}
                        >
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography align="left">{message}</Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row-reverse"
                            justify="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                            className={classes.item}
                        >
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography align="right">{message}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>




            </Container>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Mensaje"
                        fullWidth
                        margin="normal"
                    />
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <SendIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Page;
