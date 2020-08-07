import React, { useState, useEffect, useCallback } from 'react';
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
import Moment from 'react-moment';
import 'moment/locale/es';

import ChatModel from '../../models/chat';
import UserModel from '../../models/user';
import MessageModel from '../../models/message';


import { useBroadcastChannel } from '../../tools/hooks';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    item: {
        margin: '5px 10px 20px 10px;',
    },
    paper: {
        marginBottom: '80px'
    }
}));

const Page = ({ match }) => {
    const chat = ChatModel.getChat(match.params.id);
    const broadcast = useBroadcastChannel(match.params.id);
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState(chat.messages);

    const classes = useStyles();

    const user = UserModel.getUser();
    const uuidFriend = chat.users.find(user => user !== window.sessionStorage.getItem('uuid'));
    const friend = (uuidFriend) ? UserModel.findUserinListUsers(uuidFriend) : { nickname: '' };

    const handleBroadcast = useCallback(
        e => {
            setMessages([...messages, e.data]);
        },
        [messages]
    );

    useEffect(() => {
        if (broadcast) {
            broadcast.onmessage = handleBroadcast;
        }
    }, [broadcast, handleBroadcast]);

    function handleSend() {
        const tmpmsg = MessageModel.addMessageToChat(match.params.id, msg, user.nickname);
        broadcast.postMessage(tmpmsg);
        setMessages([...messages, tmpmsg]);
        setMsg("");
    }

    function returnDashboard(){
        window.location.href = "/dashboard";
    }

    return (


        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={returnDashboard}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" align="center">
                        {(chat.category) ? "Chat " + chat.category : "Chat con: " + friend.nickname}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Paper elevation={3} className={classes.paper}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                    >
                        {
                            messages.map((msg) => {
                                return (<Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    className={classes.item}
                                    key={msg.id}
                                >
                                    <Grid item>
                                        <Avatar>{msg.user[0]}</Avatar>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography align="left">{msg.text}</Typography>
                                        <Typography align="left">
                                            <Moment locale="de" fromNow >{msg.date}</Moment>
                                            </Typography>
                                    </Grid>
                                </Grid>)
                            })
                        }
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
                        onChange={e => setMsg(e.target.value)}
                        value={msg}
                    />
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleSend}>
                        <SendIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Page;
