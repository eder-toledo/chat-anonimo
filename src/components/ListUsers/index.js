import React from 'react';
import { ListItemIcon, Avatar, Divider, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ModelUser from '../../models/user';

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
                        return (
                            <ListItem key={user.id} button>
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