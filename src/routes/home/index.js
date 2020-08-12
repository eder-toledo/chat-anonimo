import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import UserModel from '../../models/user';
import {obtenerUUID} from '../../tools/generador-uuid';
import { Redirect } from "react-router-dom";

const Page = () => {

    let nickName = "";
    const UUID = obtenerUUID();

    const onClick = () => {
        UserModel.addUser(UUID, nickName);
        window.location.href = '/dashboard';
    };

    const changeNickName = function (e) {
        nickName = e.target.value ;
    };

    if(UserModel.getUser()){
        return <Redirect to="/dashboard" />
    }
    return (
        <div>
            <Box component="span" p={1} mx="auto">
                <Typography variant="h3">
                    Bienvenido a Chat anónimo
                </Typography>

                <Typography variant="subtitle1">
                    Para comenzar a chatear necesitas ingresar tu Nickname y presionar en comenzar.
                </Typography>
                <br></br>
                <TextField id="standard-basic" label="Nickname" onChange={changeNickName} />
                <br></br>
                <Button color="primary" onClick={onClick}>
                    Comenzar
                </Button>
            </Box>
        </div>
    )
};

export default Page;
