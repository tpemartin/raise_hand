import { Button, Stack } from "@mui/material";
import * as React from 'react';
import ShowHand from "./Response/ShowHand";


export default function Response() {

    const [handraised, setHandraised] = React.useState(false);
    const toggleHandraise = () => {
        setHandraised(handraised => !handraised);
    }
    const btn = handraised ?
        <Button variant={"contained"}
            onClick={toggleHandraise}>放下</Button> :
        <Button variant={"contained"}
            onClick={toggleHandraise}>舉手</Button>;


    return (
        <Stack direction={"column"} spacing={2}>
            <ShowHand show={handraised}/>
            {btn}
        </Stack>
    )
}

