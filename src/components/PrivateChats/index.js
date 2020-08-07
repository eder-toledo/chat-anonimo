import React from 'react';
import { ListItemIcon, Avatar, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ModelUser from '../../models/user';

const PrivateChats = (props) => {

    return (
        <div>
            <Typography variant="h5" align="left">
                Selecciona el chat al que desear ingresar.
            </Typography>
            <Divider />
            <List>
                {
                    props.chats.map((chat) => {
                        function onClick(idChat) {
                            window.location.href = "/chat/" + idChat;
                        };
                        const uuidFriend = chat.users.find(user => user !== window.sessionStorage.getItem('uuid'));
                        const friend = (uuidFriend) ? ModelUser.findUserinListUsers(uuidFriend).nickname : { nickname: '' };

                        return (
                            <ListItem key={chat.id} button onClick={() => onClick(chat.id)}>
                                <ListItemIcon>
                                    <Avatar>{friend[0] + friend[1]}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={chat.category} secondary={(chat.messages) ? 'Mensaje(s): ' + chat.messages.length : 'Mensajes: 0'} />
                            </ListItem>
                        );
                    })
                }
            </List>
        </div>
    )
}

export default PrivateChats;