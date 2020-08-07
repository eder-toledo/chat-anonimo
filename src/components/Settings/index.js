import React from 'react';
import ModelUser from '../../models/user';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Settings = () => {
    let nickName = "";

    const onClick = () => {
        ModelUser.editUser(nickName);
    };

    const changeNickName = function (e) {
        nickName = e.target.value ;
    };
    return (
        <Box component="span" p={1} mx="auto">
                <Typography variant="h3">
                    Cambia tu nickname
                </Typography>
                <br></br>
                <TextField id="standard-basic" label="Nickname" onChange={changeNickName} />
                <br></br>
                <Button color="primary" onClick={onClick}>
                    Guardar
                </Button>
            </Box>
    )
};

export default Settings;