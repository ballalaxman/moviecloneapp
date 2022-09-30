import { Input, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Index() {
  return (
    <React.Fragment>
      <Stack
        component="form"
        direction="column"
        spacing={3}
        alignItems="center"
        sx={{
          p: 5,
        }}
      >
        <Typography>SIGN IN</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Stack>
    </React.Fragment>
  );
}
