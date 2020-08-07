import React from 'react';
import { ListItemIcon, Avatar, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ModelChat from '../../models/chat';
import ModelUser from '../../models/user';
import CategoryChat from '../../routes/dashboard/components/CategoryChat';


const GroupChats = (props) => {

    return (
        <div>
            <Typography variant="h5" align="left">
                Selecciona el chat al que desear ingresar ó crea un chat pulsando el
                <CategoryChat />
            </Typography>
            <Divider />
            <List>
                {
                    props.chats.map((chat) => {
                        function onClick(idChat) {

                            if (!ModelChat.findUserInChat(idChat, ModelUser.getUser().id)) {
                                ModelChat.addUserToChat(idChat, ModelUser.getUser().id);
                            }

                            window.location.href = "/chat/" + idChat;
                        };

                        return (
                            <ListItem key={chat.id} button onClick={() => onClick(chat.id)}>
                                <ListItemIcon>
                                    <Avatar>{(chat.category) ? chat.category[0] : ''}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={chat.category} secondary={(chat.users) ? 'Usuarios: ' + chat.users.length : 'Usuarios: 0'} />
                            </ListItem>
                        );
                    })
                }
            </List>
        </div>
    )
}

export default GroupChats;