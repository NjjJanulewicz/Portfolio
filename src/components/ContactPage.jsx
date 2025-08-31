import React from "react";
import {Stack, TextField} from "@mui/material";

function ContactPage() {
    return (
        <Stack>
            <TextField
                label="Name"
                variant="standard"/>
            <TextField
                label="Company"
                variant="standard"/>
            <TextField
                label="Number"
                variant="standard"/>
            <TextField
                label="Email"
                variant="standard"/>
            <TextField
                margin="normal"
                label="Message"
                variant="standard"
                multiline/>
        </Stack>
    );
}

export default ContactPage;
