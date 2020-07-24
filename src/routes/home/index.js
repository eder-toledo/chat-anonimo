import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Page = () => (
    <div>
        <Box component="span" p={1} mx="auto">
            <Typography variant="h3">
                Bienvenido a Chat anónimo
            </Typography>

            <Typography variant="subtitle">
                Para poder comenzar a chatear necesitas ingresar tu Nickname y presionar en comenzar.
            </Typography>
            <br></br>
            <TextField id="standard-basic" label="Nickname" />
            <br></br>
            <Button color="primary">
                Comenzar
            </Button>
        </Box>
    </div>
)

export default Page;
