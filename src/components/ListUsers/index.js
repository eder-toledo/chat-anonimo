import React from 'react';
import { ListItemIcon, Avatar, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ModelUser from '../../models/user';
import ModelChat from '../../models/chat';

const ListUsers = (props) => {
    const localUser = ModelUser.getUser();
    const index = props.users.findIndex(p => p.id === localUser.id);

    if(index > -1){
        props.users.splice(index, 1);    
    }

    return (
        <div>
            <Typography variant="h5" align="left">
                Selecciona el usuario con quien deseas iniciar un chat.
            </Typography>
            <Divider />
            <List>
                {

                    props.users.map((user) => {
                        function onClick(idFriend) {
                            const emiter = ModelUser.getUser();
                            const idChat = ModelChat.findChat(idFriend, emiter.id);
                            console.log(idChat);
                            if (idChat) {
                                window.location.href="/chat/"+idChat;
                                
                                return;
                            }

                            const uuidChat = ModelChat.addChat('unoauno');
                            ModelChat.addUserToChat(uuidChat, emiter.id);
                            ModelChat.addUserToChat(uuidChat, user.id);
                            window.location.href="/chat/"+uuidChat;
                        };

                        return (
                            <ListItem key={user.id} button onClick={() => onClick(user.id)}>
                                <ListItemIcon>
                                    <Avatar>{user.nickname[0]}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={user.nickname} />
                            </ListItem>
                        );
                    })
                }
            </List>
        </div>
    )
}

export default ListUsers;